import React from "react";
import SideBar from "./SideBar";
import ProfileCard from "./ProfileCard";
import background from "../../../public/assets/background.jpg"

function Layout({ children }) {
  return (
    <div className="w-full h-screen p-10 flex gap-5" style={{backgroundImage: `url(../../../public/assets/background.jpg)`}}>
      <SideBar />
      <main className="flex-1 border flex flex-col gap-y-8 ">
        <ProfileCard />
        <section className="flex-1 border">{children}</section>
      </main>
    </div>
  );
}

export default Layout;
