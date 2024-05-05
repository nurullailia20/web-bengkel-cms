import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";

function MemberListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6635f5f3415f4e1a5e25d6c5.mockapi.io/api/customers"
      );
      const responseData = await response.json();
      // console.log(responseData)
      setData(responseData);
      return responseData;
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <section className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold leading-tight">
          Pelanggan Terdaftar
        </h2>
        <button className="rounded-md bg-teal-400 px-4 py-2 text-sm text-white">
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
                Nama
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Kendaraan
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Nomor Kendaraan
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Nomor Telepon
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Total Poin
              </th>
              <th className="border-b border-teal-400 bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
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
                  {item.nama}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.kendaraan}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.nomor_kendaraan}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.nomor_telepon}
                </td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">
                  {item.total_poin}
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
                    className="mx-1 rounded-[6px] bg-teal-400 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <BsPencilSquare className="h-5 w-5" />
                  </button>
                  <button
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
    </section>
  );
}

export default MemberListPage;
