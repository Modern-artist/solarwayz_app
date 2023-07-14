"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { data: session } = useSession();
  const [authenticated, setauthenticated] = useState(false);
  const router = useRouter();

  //   if (session == null) {
  //     window.location.href = "/dashboard/login";
  //   }
  useEffect(() => {
    // if (!authenticated) {
    //   router.push("/dashboard/login");
    // }
  }, []);
  if (session) {
    return (
      <div>
        <div>
          dashboard <h1>{session.user?.name}</h1>
        </div>
        {session ? (
          <button onClick={() => signOut()}>
            SignOut from the application
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return (
      <div>
        Please login to Continue{" "}
        <button onClick={() => router.push("/dashboard/login")}>Login</button>
      </div>
    );
  }
}
