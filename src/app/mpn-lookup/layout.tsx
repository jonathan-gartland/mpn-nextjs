import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | MPN Lookup",
    default: "MPN Lookup",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div style={{ paddingTop: 10 }}>{children}</div>;
}
