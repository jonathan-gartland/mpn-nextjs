import { lusitana } from '../../ui/fonts';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 grid-cols-1">
        <div></div>
        <div>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            MPN Lookup
          </h1>
          <br />
          <p>
            An automated lookup app so you don&apos;t need the relevant PDF&apos;s for the following water quality test systems:
            <br/>
            <br/>
            <div className="grid">
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
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
}