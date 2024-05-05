import React from "react";
import SideBar from "./SideBar";
import ProfileCard from "./ProfileCard";
import background from "../../../public/assets/background.jpg";
import { useRouter } from "next/router";

function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <div
      className="w-full h-screen p-5 flex gap-5"
      style={{ backgroundImage: `url(../../../public/assets/background.jpg)` }}
    >
      {pathname !== "/login" && <SideBar/>}
      <main className="flex-1 flex flex-col gap-y-8 ">
        {pathname !== "/login" && <ProfileCard />}
        <section className="flex-1 border">{children}</section>
      </main>
    </div>
  );
}

export default Layout;
