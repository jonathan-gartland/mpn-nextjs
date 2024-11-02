import { Metadata } from "next";
import React from "react";
import NavLinks from "@/app/ui/mpn-lookup/nav-links";

export const metadata: Metadata = {
  title: {
    template: "%s | MPN Lookup",
    default: "MPN Lookup",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/6 flex h-screen flex-col md:flex-col  md:overflow-hidden flex-none md:w-50">
      <div>
        <NavLinks />
      </div>
      <div style={{ paddingTop: 10 }}>{children}</div>
    </div>
  );
}
