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
            An automated lookup so you don't need the relevant PDF's for the following water quality test systems:
            <br/>
            <br/> QuantiTray&reg;
            <br/>QuantiTray2000&reg;
            <br/>and Legiolert&reg;
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
}