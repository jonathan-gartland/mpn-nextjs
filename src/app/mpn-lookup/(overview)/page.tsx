import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <div className={`${lusitana.className} grid gap-6 grid-cols-1`}>
        <div></div>
        <div>
          <h1
            className={`${lusitana.className} mb-4 text-xl md:text-2xl text-blue-600`}
          >
            MPN Lookup
          </h1>
          <br />
          <p className="text-lg">
            An automated lookup app so you don&apos;t need the relevant
            PDF&apos;s for the following water quality test systems:
          </p>
          <br />
          <br />
          <div className="grid grid-cols-3 gap-4 mb-6 w-1/2">
            <div>
              <h1>QuantiTray&reg;</h1>
            </div>
            <div>
              <h1>QuantiTray2000&reg;</h1>
            </div>
            <div>
              <h1>Legiolert&reg;</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
