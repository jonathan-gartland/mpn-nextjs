import SideNav from "@/app/ui/mpn-lookup/sidenav";
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
    <div
      className="flex h-screen flex-col md:flex-col md:overflow-hidden w-full flex-none md:w-50"
      style={{
        display: "flex",
        alignContent: "center",
        marginLeft: "30%",
        // width: 700,
      }}
    >
      {/*<SideNav />*/}
      {/*<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>*/}
      <div>{children}</div>
    </div>
  );
}
