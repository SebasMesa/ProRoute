import React from 'react'
import { LuDollarSign } from "react-icons/lu"
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const AdminMain = () => {
  return (
    <section className='grid w-full gap-y-[1rem] md:grid-cols-3 overflow-hidden'>
      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass flex flex-col'>
        <div className='w-full flex flex-col items-center gap-[1rem] mb-[2.5rem]'>
          <h2 className='text-white text-2xl font-rubik'>Ganancias Totales</h2>
          <LuDollarSign size={'25px'} className='text-secondary' />
        </div>

        <div className='h-full flex flex-col justify-end items-start'>
          <p className='text-3xl font-poppins'>$1.000.000</p>
          <span className='text-dimWhite text-[1rem]'>+15% respecto al mes pasado</span>
        </div>
      </div>

      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass flex flex-col'>
        <div className='w-full flex flex-col items-center gap-[1rem] mb-[2.5rem]'>
          <h2 className='text-white text-2xl font-rubik'>Nuevos Usuarios</h2>
          <FiUsers size={'25px'} className='text-secondary' />
        </div>

        <div className='h-full flex flex-col justify-end items-start'>
          <p className='text-3xl font-poppins'>1,203</p>
          <span className='text-dimWhite text-[1rem]'>+20% desde el mes pasado</span>
        </div>
      </div>


      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass flex flex-col'>
        <div className='w-full flex flex-col items-center gap-[1rem] mb-[2.5rem]'>
          <h2 className='text-white text-2xl font-rubik'>Membresias Vendidas</h2>
          <FiShoppingCart size={'25px'} className='text-secondary' />
        </div>

        <div className='h-full flex flex-col justify-end items-start'>
          <p className='text-3xl font-poppins'>200</p>
          <span className='text-dimWhite text-[1rem]'>+7% respecto al mes pasado</span>
        </div>
      </div>


      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass md:col-span-2'>
        <div className='w-full mb-[1rem]'>
          <h2 className='text-white text-2xl font-rubik'>Compras recientes</h2>
          {/* <LuDollarSign size={'25px'} className='text-secondary' /> */}
        </div>

        <div className="overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2"># Orden</th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody className='rounded-lg'>
              <tr>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12345</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Luis</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-02</td>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Pendiente
                  </span>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">$100.000</td>
              </tr>
              <tr className="">
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12346</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Luis</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-02</td>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Completado
                  </span>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">$100.000</td>
              </tr>
              <tr>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12347</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Luis</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-02</td>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <span className="inline-block bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    Cancelado
                  </span>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">$100.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass'>
        <div className='w-full mb-[1rem]'>
          <h2 className='text-white text-2xl font-rubik'>Compras recientes</h2>
          {/* <LuDollarSign size={'25px'} className='text-secondary' /> */}
        </div>

        <div className="overflow-x-scroll">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2"># Orden </th>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Fecha</th>
              </tr>
            </thead>
            <tbody className='rounded-lg'>
              <tr>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12345</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Luis</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-01</td>
              </tr>
              <tr className="">
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12346</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Sara</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-02</td>
              </tr>
              <tr>
                <td className="border border-[#3d3d3d] px-4 py-2">
                  <a href="#" className="text-blue-500 hover:underline">#12347</a>
                </td>
                <td className="border border-[#3d3d3d] px-4 py-2">Nicol</td>
                <td className="border border-[#3d3d3d] px-4 py-2">2024-10-03</td>
              </tr>
            </tbody>
          </table>
        </div>      </div>



      <div className='text-white font-rubik text-[1.070rem] rounded-route px-8 py-4 md:ml-[1rem] bg-glass flex flex-col'>
        <div className='w-full flex flex-col items-center gap-[1rem] mb-[2.5rem]'>
          <h2 className='text-white text-2xl font-rubik'>Ganancias Totales</h2>
          <LuDollarSign size={'25px'} className='text-secondary' />
        </div>

        <div className='h-full flex flex-col justify-end items-start'>
          <p className='text-3xl font-poppins'>$1.000.000</p>
          <span className='text-dimWhite text-[1rem]'>+15% respecto al mes pasado</span>
        </div>
      </div>

    </section>
  )
}

export default AdminMain