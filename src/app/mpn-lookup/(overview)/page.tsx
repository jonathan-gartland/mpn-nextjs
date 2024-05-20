import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <div className={`${lusitana.className} w-1/2 text-lg`}>
        <div>
          <h1 className={`text-xl md:text-2xl text-blue-600`}>MPN Lookup</h1>
          <br />
          <p className="text-lg">
            A simple, automated lookup application created so one need not to
            have to rely on the relevant associated PDF&apos;s for finding the
            Most Probable Number for the sample used when using the following
            test systems:
          </p>
          <br />
          <div className="grid grid-cols-3 gap-5 text-xl text-blue-600">
            <div className="px-20">QuantiTray&reg;</div>
            <div>QuantiTray2000&reg;</div>
            <div>Legiolert&reg;</div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
