import { lusitana } from "../../ui/fonts";
import React, { Suspense } from "react";
import Link from "next/link";
import NavLinks from "@/app/ui/mpn-lookup/nav-links";

export default async function Page() {
  return (
    <main>
      <div className={"w-1/6"} style={{ paddingBottom: 10 }}>
        <NavLinks />
      </div>
      <div className={`${lusitana.className} text-lg`}>
        <div className={"w-1/6"} style={{ paddingBottom: 10 }}>
          <h1
            className={`text-xl md:text-2xl text-blue-600`}
            style={{ paddingBottom: 10 }}
          >
            Welcome to MPN Lookup
          </h1>
          <p className="text-lg">
            A simple, automated lookup application created so one need not to
            have to rely on the relevant associated PDF&apos;s for finding the
            Most Probable Number for the sample used when using the following
            test systems:
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 text-xl text-blue-600 gap-y-1">
            <div>
              <Link href="/mpn-lookup/quantitray">QuantiTray&reg;</Link>
            </div>
            <div>
              <Link href="/mpn-lookup/quantitray2000">QuantiTray2000&reg;</Link>
            </div>
            <div>
              <Link href="/mpn-lookup/legiolert">Legiolert&reg;</Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
