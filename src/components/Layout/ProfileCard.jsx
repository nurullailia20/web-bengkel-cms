import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import user from "../../../public/assets/user.jpeg";
import Image from "next/image";

function ProfileCard() {
  return (
    <div className="h-[60px] w-[350px] border rounded-full flex justify-between p-2 items-center shadow-md">
      <div className="h-full w-auto flex gap-x-2">
        <div className="h-10 w-12 rounded-full">
          <Image width={40} height={40} src={user}/>
        </div>
        <div className="h-10 w-full flex flex-col justify-center gap-y-1 ">
          <div className="font-semibold">Halo, Dea</div>
          <div>Semoga harimu menyenangkan</div>
        </div>
      </div>
      <button className="h-10 w-10 cursor-pointer">
        <FaPencilAlt />
      </button>
    </div>
  );
}

export default ProfileCard;
