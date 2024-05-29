import { useRouter } from "next/router";
import React from "react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (val) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        val,
        {
          withCredentials: true,
        }
      );

      if (response?.data?.statusCode === 200) {
        const { accessToken, refreshToken } = response.data.data;
        Cookies.set("token", accessToken);
        Cookies.set("refreshtoken", refreshToken);
        router.push("/");
      } else {
        alert(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    if (Cookies.get("token")) push("/");
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[600px] h-auto shadow-xl rounded-2xl px-10 py-5 flex flex-col gap-y-5 border ">
        <div className="font-semibold text-xl text-center">Login</div>
        <form
          className="w-full h-full flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name=""
              id="name"
              className="border p-3 rounded-md"
              {...register('name', {
                required: true,
              })}
              />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="text"
              name=""
              id="password"
              className="border p-3 rounded-md"
              {...register('password', {
                required: true,
              })}
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
