import { useRouter } from "next/navigation";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { FaClipboardList, FaUsers } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";

function SideBar() {
  const sidelinks = [
    {
      name: "Daftar Produk",
      link: "/",
      icon: <BsBagCheckFill />,
    },
    {
      name: "Daftar Pelanggan",
      link: "/member",
      icon: <FaUsers />,
    },
    {
      name: "Riwayat Perbaikan",
      link: "/service-history",
      icon: <FaClipboardList />,
    },
  ];
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshtoken");
    router.refresh();
  };
  return (
    <div className="h-full w-[300px] border flex flex-col justify-between rounded-2xl p-5">
      <div className="flex flex-col gap-y-5">
        <div>Al-Variasi</div>
        <ul>
          {sidelinks.map((sidelink) => (
            <li
              key={sidelink.name}
              onClick={() => router.push(sidelink.link)}
              className="flex items-center gap-3 cursor-pointer py-3 px-4 hover:bg-gray-100"
            >
              <span>{sidelink.icon}</span>
              <span>{sidelink.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 cursor-pointer py-3 px-4 hover:bg-gray-100"
      >
        <span>
          <TbLogout2 />
        </span>
        <span>Keluar</span>
      </button>
    </div>
  );
}

export default SideBar;
