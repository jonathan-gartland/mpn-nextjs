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
      <div className="grid grid-cols-2 gap-1 mb-6 w-24">
        <div>MPN:</div>
        <div>{mpnList[1]}</div>
      </div>
    );
  }

  function mpn95conf(inCount: number) {
    let mpnList: any[] = [];
    if (inCount >= 0 && inCount <= 51) {
      mpnList = getQtMpn(inCount);
    }
    // if (mpnList.length === 0) {
    //   return (
    //     <label data-testid={"empty-value-label"}>
    //       Enter valid value please!
    //     </label>
    //   );
    // }

    return (
      <div className="grid grid-cols-2 gap-4 mb-6 w-24">
        <div>High: </div>
        <div>{mpnList[2]}</div>
        <div>Low:</div>
        <div>{mpnList[0]}</div>
      </div>
    );
  }

  return (
    <div className="w-1/2">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        QuantiTray&reg; MPN
      </h1>
      <br />
      <div className="grid grid-cols-2 gap-4 mb-6 ">
        <div>
          Enter Positive Well Count:&emsp;
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
          />
        </div>
        {<div>{mpn(inCount)}</div>}
        <div>
          <label data-testid={"qt-conf-label"}>95% Confidence Range</label>
        </div>
        {<div>{mpn95conf(inCount)}</div>}
      </div>
    </div>
  );
}
