import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import dbConnect from "@/db/db";
import Users from "@/models/Users";

const handler = NextAuth({
  // Enable JSON Web Tokens since we will not store sessions in our DB
  session: {
    strategy: "jwt",
  },
  // Here we add our login providers - this is where you could add Google or Github SSO as well
  providers: [
    CredentialsProvider({
      name: "credentials",
      // The credentials object is what's used to generate Next Auths default login page - We will not use it however.
      credentials: {},
      // Authorize callback is ran upon calling the signin function
      authorize: async (credentials) => {
        console.log("credentials recived in next auth", credentials);
        dbConnect();

        // Try to find the user and also return the password field
        const user = await Users.findOne({ email: credentials.email })
          .then((res) => {
            console.log("this is the error");
            return res;
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("this is the user we found in the database ", user);
        let pwValid = false;
        if (!user) {
          throw new Error("No user with a matching email was found.");
        } else {
          // Use the comparePassword method we defined in our user.js Model file to authenticate
          pwValid = user.password === credentials.password ? true : false;
        }

        if (!pwValid) {
          throw new Error("Your password is invalid");
        } else {
          console.log("user successfully logged in");
          return user;
        }
      },
    }),
  ],
  // All of this is just to add user information to be accessible for our app in the token/session
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    // This could be avatars, role, display name, etc...
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          _id: user._id,
          name: user.name,
          location: user.location,
          pno: user.pno,
          email: user.email,
          dateCreated: user.dateCreated,
          //   role: user.role,~
        };
      }
      return token;
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    // Here you can define your own custom pages for login, recover password, etc.
    signIn: "/dashboard/login", // we are going to use a custom login page (we'll create this in just a second)
  },
});

export { handler as GET, handler as POST };
