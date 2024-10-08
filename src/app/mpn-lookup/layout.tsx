import SideNav from "@/app/ui/mpn-lookup/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | MPN Lookup",
    default: "MPN Lookup",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
