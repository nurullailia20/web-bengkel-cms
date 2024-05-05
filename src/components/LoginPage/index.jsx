import React from "react";

function LoginPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[600px] h-auto shadow-xl rounded-2xl px-10 py-5 flex flex-col gap-y-5 border ">
        <div className="font-semibold text-xl text-center">Login</div>
        <form className="w-full h-full flex flex-col gap-y-3">
          <div className="flex flex-col">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name=""
              id="name"
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="text"
              name=""
              id="password"
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button className="px-10 p-3 bg-teal-400 rounded-md ">Masuk</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
