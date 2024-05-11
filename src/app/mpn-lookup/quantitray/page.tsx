"use client";

import { getQtMpn } from "mpn-lookup/mpn.lookup";
import { useState } from "react";
import { lusitana } from "@/app/ui/fonts";

export default function Mpn() {
  const [inCount, setInCount] = useState(0);

  function mpn(inCount: number) {
    let mpnList: any[] = [];
    if (inCount >= 0 && inCount <= 51) {
      mpnList = getQtMpn(inCount);
    }
    if (mpnList.length === 0) {
      return (
        <label data-testid={"empty-value-label"}>
          Enter valid value please!
        </label>
      );
    }

    return (
      <div>
        <h5 data-testid={"qt-mpn-val"}>MPN: {mpnList[1]}</h5>
        <label data-testid={"qt-conf-label"}>95% Confidence Range</label>
        <br />
        <span>
          Low: {mpnList[0]} -- High: {mpnList[2]}
        </span>
      </div>
    );
  }

  return (
    <>
      <label>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          QuantiTray&reg;
        </h1>
        <br />
        <br />
        {/* eslint-disable-next-line max-len */}
        Enter Positive Well Count:{" "}
        <input
          name={"QTinput"}
          id={"qtinput"}
          value={inCount}
          onChange={(e) => setInCount(parseInt(e.target.value))}
          type="number"
          min="0"
          max="51"
          data-testid={"qt-input-dataid"}
        />
        <br />
        {<div>{mpn(inCount)}</div>}
      </label>
    </>
  );
}
