"use client";

import React from "react";
import { lusitana } from "@/app/ui/fonts";

export default function AboutForm() {
  const mpnlookup_url = "https://github.com/jonathan-gartland/mpn-lookup";
  const iqt_url =
    "https://www.idexx.com/en/water/water-products-services/quanti-tray-system/";
  const obytes_url = "https://starter.obytes.com/";
  return (
    <>
      <h1
        style={{ textAlign: "center" }}
        className={`${lusitana.className} mb-4 text-lg md:text-2xl text-blue-600`}
      >
        About
      </h1>
      <div
        id="aboutdiv"
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
          <h1
            className="text-xl"
            style={{ textAlign: "center", position: "relative", paddingTop: 5 }}
          >
            or: <br /> Why is this a thing?
          </h1>
          <br />
          <p>
            Many water testing facilities utilize the Idexx QuantiTray&reg;
            System for analyzing possible contamination in water samples.
          </p>{" "}
          <br />
          <p>
            For a quick overhead view for those unfamiliar, the water sample
            under test is incubated. Next the positive indicating sample portion
            is counted. The MPN is found in one of three reference PDF files.
          </p>
          <br />
          <p>For all the detail you will ever need about this please visit: </p>
          <a href={iqt_url} style={{ color: "blue" }}>
            Idexx QuantiTray System
          </a>
        </div>
      </div>
    </>
  );
}
