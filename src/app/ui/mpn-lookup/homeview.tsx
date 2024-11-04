import React from "react";
import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <main style={{ padding: 5 }}>
      <h1
        style={{ textAlign: "center" }}
        className={`${lusitana.className} mb-4 text-lg md:text-2xl text-blue-600`}
      >
        Welcome!
      </h1>
      <div
        id="welcomediv"
        style={{
          border: "solid",
          marginRight: "5px",
          paddingRight: "15px",
          paddingBottom: "15px",
        }}
        className={`${lusitana.className} text-lg  bg-amber-50`}
      >
        <div
          style={{ textAlign: "left", paddingLeft: "15px" }}
          data-testid={"about-text-id"}
        >
          <p style={{ paddingBottom: 5 }}>
            This app lets you look up your relevant MPN without needing to
            download PDF&apos;s or Windows only desktop applications...{"  "}
            IYKYK!
          </p>
          <br />
          <p>If none of the above makes sense, the About section awaits</p>
        </div>
      </div>
    </main>
  );
}
