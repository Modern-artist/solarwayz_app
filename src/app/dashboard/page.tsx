"use client";
import Navbar from "@/components/navbar/Navbar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/searchBar/SearchBar";
import TableData from "@/components/table/TableData";
import Footer from "@/components/footer/Footer";
import Newform from "@/components/form/Newform";

export default function page() {
  const { data: session, status } = useSession();
  const [authenticated, setauthenticated] = useState(false);
  const router = useRouter();

  // if (session == null) {
  //   window.location.href = "/dashboard/login";
  // }
  console.log(session, status);

  useEffect(() => {
    // if (!authenticated) {
    //   router.push("/dashboard/login");
    // }
  }, []);
  if (session) {
    return (
      <div style={{ marginTop: "100px" }}>
        {session ? (
          <>
            <div style={{ marginTop: "-100px" }}>
              {/* <Newform/> */}
              <Navbar flag="4" />
              <main>
                <div
                  className="breadcrumbs d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage:
                      "url('assets/img/hero-carousel/hero-carousel-1.jpeg')",
                  }}
                >
                  <div
                    className="conta2iner position-relative d-flex flex-column align-items-center"
                    data-aos="fade"
                  >
                    <h2>Dashboard</h2>
                    <ol>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Dashboard</li>
                    </ol>
                  </div>
                </div>
                <button onClick={() => signOut()}>
                  SignOut from the application
                </button>
                <div className="searchFilter">
                  <div className="details">
                    <div className="imgName">
                      <img
                        src="../../assets/img/myImg.jpeg"
                        className="profile"
                        alt=""
                      />
                      <strong>Seguerre Michel</strong>
                      <span>RecordID: 2183132</span>
                    </div>
                    <span>37 Robinson St, Woonsocket, RI 02895, USA</span>
                    <span>Seguerremichel@gmail.com</span>
                  </div>
                  <SearchBar />
                </div>
                <TableData />
                <Footer />
              </main>
            </div>
          </>
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
