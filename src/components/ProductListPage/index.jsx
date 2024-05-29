import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import ProductModal from "../form/ProductModal ";
import Cookies from "js-cookie";

function ProductListPage() {
  const [data, setData] = useState([]);
  const [formModalState, setFormModalState] = useState({open:false, selectedId:undefined});
  const handleModal = (open, selectedId="") => {
    setFormModalState({open, selectedId})
  };

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/product/${id}`
      );
      if (response.status === 200) {
        alert(response.data.message);
      } else alert(response.data.message);
      router.reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/product");
      const responseData = await response.json();
      setData(responseData.data);
      return responseData.data;
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    if (!Cookies.get("token")) router.push("/login");
  }, []);

  return (
    <section className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold leading-tight">
          Daftar Produk
        </h2>
        <button
          className="rounded-md bg-teal-400 px-4 py-2 text-sm text-white"
          onClick={() => handleModal(!formModalState.open)}
        >
          Tambah
        </button>
      </div>
      <div className="inline-block max-h-[500px] min-w-full overflow-hidden rounded-lg shadow-lg hover:overflow-y-scroll">
        <table className="min-w-full overflow-scroll leading-normal">
          <thead>
            <tr>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                No
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Nama Barang
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Jumlah Stok
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Harga Barang 
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Tanggal Masuk Barang
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "hover:bg-gray-200"
                    : "bg-gray-10 hover:bg-gray-200"
                }
              >
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {index + 1}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.name}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.stock}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.price}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.date_in}
                </td>
                <td className="gap-x-2 border-gray-200 bg-white px-5 py-5 text-sm">
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Lihat Detail"
                    type="button"
                    className="mx-1 rounded-[6px] bg-teal-400 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <HiInformationCircle className="h-5 w-5" />
                  </button>
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Edit Data"
                    type="button"
                    onClick={() => handleModal(!formModalState.open, item.id)}
                    className="mx-1 rounded-[6px] bg-teal-400 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <BsPencilSquare className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Hapus Data"
                    type="button"
                    className="mx-1 rounded-[6px] bg-red-500 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <BiTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {formModalState.open && <ProductModal open={formModalState.open} setOpen={(open) => handleModal(open)} selectedId = {formModalState.selectedId}  />}
    </section>
  );
}

export default ProductListPage;
