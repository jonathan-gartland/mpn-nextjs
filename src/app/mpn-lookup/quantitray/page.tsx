"use client";

import { getQtMpn } from "mpn-lookup/mpn.lookup";
import React, { useEffect, useState } from "react";
import { lusitana } from "@/app/ui/fonts";
import { Props } from "react-svg";

const ShowMpnVal: React.FC<{ count: number }> = ({ count }) => {
  let mpnList: any[] = count >= 0 && count <= 51 ? getQtMpn(count) : [];
  let mpnText =
    mpnList.length === 0 ? (
      <>
        {/*<div></div>*/}
        <div
          className="text-red-600 font-bold text-xl"
          style={{ position: "relative", left: "-95px" }}
        >
          Invalid Count!
        </div>
      </>
    ) : (
      <div
        className="text-red-600 font-bold text-xl"
        style={{ position: "relative", left: "-45px" }}
      >
        {mpnList && (mpnList[0] === "<1.0" || mpnList[0] === ">200.5")
          ? mpnList[0] === "<1.0"
            ? "< 1.0"
            : "> 200.5"
          : mpnList[0]}
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-6 mb-6 text-red-600 text-xl">
      <div>MPN:</div>
      <div>{mpnText}</div>
    </div>
  );
};

const ConfidenceView: React.FC<{ count: number }> = ({ count }) => {
  let mpnList: any[] = count >= 0 && count <= 51 ? getQtMpn(count) : [];

  return (
    <div>
      <label className="text-xl text-blue-600" data-testid={"qt-conf-label"}>
        Confidence Range:
      </label>
      <div className="text-lg" style={{ paddingTop: "10px" }}>
        <div className="grid grid-cols-2 gap-4 mb-6 w-30 text-blue-600">
          <div>95% High:</div>
          <div style={{ position: "relative", left: "-40px" }}>
            {mpnList[2] === "infinite" ? "Infinite" : mpnList[2]}
          </div>
          <div>95% Low:</div>
          <div style={{ position: "relative", left: "-40px" }}>
            {mpnList[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuantiTrayMpnC: React.FC<{ testType: string }> = ({ testType }) => {
  const [inCount, setInCount] = useState(0);
  return (
    <>
      <div
        className={`${lusitana.className} grid grid-cols-2 gap-4 mb-6 w-1/2`}
      >
        <h1
          className="mb-4 text-xl md:text-2xl text-blue-600"
          style={{ alignContent: "center", marginLeft: 25 }}
        >
          {`${testType}`}&reg; MPN
        </h1>
        <br />
        <div className="text-xl text-blue-600">
          Positive Well Count:&emsp;
          <input
            className="rounded-md w-12 px-1"
            name={"QTinput"}
            id={"qtinput"}
            value={inCount}
            onChange={(e) => setInCount(parseInt(e.target.value))}
            type="number"
            min="0"
            max="51"
            data-testid={"qt-input-dataid"}
            style={{ position: "relative", left: "15px" }}
          />
        </div>
        <div>{}</div>
        <ShowMpnVal count={inCount} />
        <div>{}</div>
        <ConfidenceView count={inCount} />
      </div>
    </>
  );
};

export default function QuantiTrayMpn() {
  return <QuantiTrayMpnC testType={"QuantiTray"} />;
}
