import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { data } from "autoprefixer";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ProductModal({ open, setOpen, selectedId = "" }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const { reload } = useRouter();

  const toggleModal = () => {
    setOpen(!open);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const getProduct = async (id) => {
      const response = await axios.get(`http://localhost:4000/product/${id}`);
      setData(response.data.data);
    };
    getProduct(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (selectedId) {
      setValue("name", data.name);
      setValue("stock", data.stock);
      setValue("price", data.price);
      setValue("date_in", data.date_in);
    }
  }, [selectedId, data]);

  const onSubmit = async (val) => {
    try {
      let response;
      if (selectedId) {
        response = await axios.put(
          `http://localhost:4000/product/${selectedId}`,
          val
        );
      } else {
        response = await axios.post("http://localhost:4000/product", val);
      }
      alert(response.data.message);
      reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={toggleModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-0"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-white shadow-xl border p-5 border-teal-400 flex flex-col space-y-5">
                <DialogTitle as="h3" className="text-xl font-medium">
                  {selectedId ? "Perbarui " : "Masukkan "} Data Produk
                </DialogTitle>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-3"
                >
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="name">Nama Barang</label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Nama Barang"
                      className="border px-3 py-2 rounded-md focus:outline-none"
                    />
                    {/* {errors ? (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    ) : null} */}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="stock">Jumlah</label>
                    <input
                      type="text"
                      {...register("stock", {
                        required: true,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers are allowed"
                        }
                      })}
                      placeholder="Jumlah"
                      className="border px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    {/* {errors &&
                      <span className="text-red-500 text-sm">
                        Only numbers are allowed
                      </span>
                    } */}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="price">Harga Barang</label>
                    <input
                      type="text"
                      {...register("price", { 
                        required: true, 
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers are allowed"
                        }
                      })}
                      placeholder="Harga Barang"
                      className="border px-3 py-2 rounded-md focus:outline-none"
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    {/* {errors &&
                      <span className="text-red-500 text-sm">
                        Only numbers are allowed
                      </span>
                    } */}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="date_in">Tanggal Masuk Barang</label>
                    <input
                      type="date"
                      {...register("date_in")}
                      placeholder="Tanggal Masuk Barang"
                      className="border px-3 py-2 rounded-md focus:outline-none"
                    />
                    {/* {errors ? (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    ) : null} */}
                  </div>

                  <button className="cursor-pointer items-center gap-2 rounded-md bg-teal-400 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline data-[hover]:bg-teal-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    {selectedId.length > 0 ? "Simpan " : "Tambah "}
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
