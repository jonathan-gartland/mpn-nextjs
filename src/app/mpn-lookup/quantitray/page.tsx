"use client";

import { getQtMpn } from "mpn-lookup/mpn.lookup";
import React, { useState } from "react";
import { lusitana } from "@/app/ui/fonts";

const ShowInput: React.FC = () => {
  const [inCount, setInCount] = useState(0);
  // @ts-ignore
  return (
    <>
      <div className="text-xl">
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
      <ResultView count={inCount} />
    </>
  );
};

const ShowMpnVal: React.FC<{ count: number }> = ({ count }) => {
  let mpnList: any[] = count >= 0 && count <= 51 ? getQtMpn(count) : [];
  let text = mpnList.length === 0 ? "Enter valid value please!" : "MPN:";

  return (
    <div className="grid grid-cols-2 gap-6 mb-6 w-24 text-red-600 text-xl">
      <div>{text}</div>
      <div className="text-red-600 font-bold text-xl">
        {mpnList && mpnList[0]}
      </div>
    </div>
  );
};

const ConfidenceView: React.FC<{ count: number }> = ({ count }) => {
  let mpnList: any[] = count >= 0 && count <= 51 ? getQtMpn(count) : [];

  return (
    <>
      <div className="text-xl">
        <label data-testid={"qt-conf-label"}>95% Confidence Range</label>
      </div>
      {
        <div className="text-lg">
          <div className="grid grid-cols-2 gap-4 mb-6 w-24">
            <div>High:</div>
            <div>{mpnList[2]}</div>
            <div>Low:</div>
            <div>{mpnList[1]}</div>
          </div>
        </div>
      }
    </>
  );
};
const ResultView: React.FC<{ count: number }> = ({ count }) => {
  return (
    <>
      <ShowMpnVal count={count} />
      <ConfidenceView count={count} />
    </>
  );
};

const TitleView: React.FC = () => {
  return (
    <>
      <h1 className="mb-4 text-xl md:text-2xl text-blue-600">
        QuantiTray&reg; MPN
      </h1>
      <br />
    </>
  );
};

export default function Mpn() {
  return (
    <div className={`${lusitana.className} w-1/2`}>
      <TitleView />
      <div className="grid grid-cols-2 gap-4 mb-6 ">
        <ShowInput />
      </div>
    </div>
  );
}
