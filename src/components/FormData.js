import React from 'react'
import {Opt} from '../pages/dashboard'

const FormData = () => {
  return (
    <div>
      <div className="bg-white ml-5 mr-5">
          <br/>
          <Opt><p className="text-xl font-bold">Form Title</p></Opt>
          <Opt><p>Sed tortor , sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p></Opt>

          <div className="flex items-center bg-red-50 border-red-400 border-2 rounded-md p-4 ml-4 mr-4">
            <p className="text-red-800">Senectus malesuada suspendisse bibendium elit amet vitae</p>
          </div><br/>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border">
              <tr>
                <th className="border bg-neutral-300  p-2">Table Title</th>
                <th className="border bg-neutral-300  p-2">Table Title</th>
                <th className="border bg-neutral-300  p-2">Table Title</th>
                <th className="border bg-neutral-300  p-2">Table Title</th>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border flex justify-around p-2">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border flex justify-around p-2 bg-neutral-100">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 bg-neutral-100 flex justify-around">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around bg-neutral-100">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 ">Etiam purus in </td>
                <td className="border p-2 ">Curabitur donec duis</td>
                <td className="border p-2 ">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around  ">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around bg-neutral-100">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border  p-2  flex justify-around">
                  <button className="text-white bg-blue-700 p-1 rounded-sm">Edit</button>
                  <button className="text-white bg-amber-600 p-1 rounded-sm">Delete</button>
                </td>
              </tr>

            </table><br/>
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-neutral-400 pl-3 pr-3 pt-1 pb-1 m-1 rounded-md">1</button>
            <button className="border-2 border-neutral-400 pl-3 pr-3 pt-1 pb-1 m-1 rounded-md">2</button>
            <button className="border-2 border-neutral-400 pl-3 pr-3 pt-1 pb-1 m-1 rounded-md">3</button>
            <button className="border-2 border-neutral-400 pl-3 pr-3 pt-1 pb-1 m-1 rounded-md">4</button>
            <button className="border-2 border-neutral-400 pl-3 pr-3 pt-1 pb-1 m-1 rounded-md">5</button>
          </div><br/>

      </div><br/><br/>
      
    </div>
  )
}

export default FormData
