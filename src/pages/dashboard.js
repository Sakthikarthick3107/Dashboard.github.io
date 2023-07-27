import Link from "next/link"
import styled from "styled-components"
import SideDrawer from "../components/SideDrawer";
import React , { useState } from 'react';
import SearchBar from "@/components/SearchBar";
import {HomeIcon , CogIcon ,MenuIcon ,MenuAlt2Icon,PlusIcon,ShoppingBagIcon ,UserGroupIcon ,FolderIcon , } from '@heroicons/react/outline'
import {ShoppingCartIcon,InformationCircleIcon,XIcon } from '@heroicons/react/solid'
import FormOne from "@/components/FormOne";
import Form2 from "@/components/Form2";
import FormThree from "@/components/FormThree";


const Opt = styled.div`
  display:flex;
  place-items:center;
  margin : 10px 15px;
  position : relative;
  left : 20px
`;



const Dashboard = () => {

  const [isOpen , setIsOpen ] =  useState(true);
  const makeOpen = () => {
    setIsOpen(true);
  };

  const makeClose = () => {
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    
  };


  return (
    <div className="flex bg-gray-200 max-h-fit">
      <SideDrawer isOpen={isOpen} onClose={makeClose} />

      <main
          className={`flex-1 ${
            isOpen ? 'ml-60' : 'ml-0'
          } transition-all duration-300`}
        >
       <div className="bg-black text-white flex fixed top-0 left-0 right-0  justify-items-start ">
        <button className="text-white " >{isOpen?<XIcon className="h-5 mr-1 ml-2" onClick={makeClose} />:<MenuIcon className="h-5 mr-1 ml-2" onClick={makeOpen} />}</button>
        <Link href="" className="flex">
          <Opt><HomeIcon className="h-4"/>Home</Opt>
        </Link>
        
        <Link href="">
          <Opt><MenuIcon className="h-4"/> Contents</Opt>
        </Link>

        <Link href="">
          <Opt><MenuAlt2Icon className="h-4 "/> Categories</Opt>
        </Link>

        <Link href="">
          <Opt><CogIcon className="h-4"/>Settings</Opt>
        </Link>
      </div><br/><br/>


      <div className="flex bg-white h-20 ">
        <div className="flex grow items-center">
          <Opt><p className="text-xl font-bold">Add new post</p></Opt>
          <p className="text-lg"><Opt><PlusIcon className="h-5 mr-1"/> Add Content</Opt></p>
          <p className="text-lg"><Opt><CogIcon className="h-5 mr-1"/>Settings</Opt></p>
        </div>
        <div className="flex items-center mr-3">
            <SearchBar onChange={handleSearch} />
        </div>
      </div><br/>

      <div className="grid grid-cols-4 gap-4 ">

          <div className="bg-white rounded-md p-5 grid grid-cols-2 ml-4">
            <div><ShoppingBagIcon className="text-orange-600 h-20"/></div>
            <div className="pr-5 ">
              
              <p>Total Sales</p>
              <p className="text-2xl font-bold">$2456</p>
              
            </div>
          </div>

          <div className="bg-white rounded-md p-5 grid grid-cols-2">
            <div><ShoppingCartIcon className="text-violet-600 h-20"/></div>
            <div className="pr-2 ">
              
              <p>Total Expenses</p>
              <p className="text-2xl font-bold">$3326</p>
              
            </div>
          </div>

          <div className="bg-white rounded-md p-5 grid grid-cols-2 ">
            <div><UserGroupIcon className="text-green-800  h-20"/></div>
            <div className="pr-2 ">
              
              <p>Total Visitors</p>
              <p className="text-2xl font-bold">$5325</p>
              
            </div>
          </div>

          <div className="bg-white rounded-md p-5 grid grid-cols-2 mr-4">
            <div><MenuAlt2Icon className="text-purple-600  h-20"/></div>
            <div className="pr-2 ">
              
              <p>Total Orders</p>
              <p className="text-2xl font-bold">$1326</p>
              
            </div>
          </div>


      </div><br/>

      <div className="bg-white ml-5 mr-5 rounded-md">
          <br/>
          <Opt><p className="text-xl font-bold">Form Title</p></Opt>
          <Opt><p>Sed tortor , sed velit ridiculus ipsum pharetra lacus odio gravida augue enim</p></Opt>

          <div className="flex items-center bg-red-50 border-red-400 border-2 rounded-md p-4 ml-4 mr-4">
            <InformationCircleIcon className="h-7 mr-2 text-red-800"/>
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
                  <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border flex justify-around p-2 bg-neutral-100">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 bg-neutral-100 flex justify-around">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex  justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around bg-neutral-100">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 ">Etiam purus in </td>
                <td className="border p-2 ">Curabitur donec duis</td>
                <td className="border p-2 ">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around  ">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2 bg-neutral-100">Etiam purus in </td>
                <td className="border p-2 bg-neutral-100">Curabitur donec duis</td>
                <td className="border p-2 bg-neutral-100">Morbi pharetra,accumsan</td>
                <td className="border p-2 flex justify-around bg-neutral-100">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
                </td>
              </tr>

              <tr>
                <td className="border p-2">Etiam purus in </td>
                <td className="border p-2">Curabitur donec duis</td>
                <td className="border p-2">Morbi pharetra,accumsan</td>
                <td className="border  p-2  flex justify-around">
                <button className="text-white bg-blue-700 py-1 px-2  rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                      Edit
                  </button>
                  <button className="text-white bg-amber-600 py-1 px-2 rounded-sm flex justify-center items-center">
                  <FolderIcon className="h-5 mr-1" />
                    Delete</button>
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
      
      <FormOne/><br/>
        
      <div className="grid grid-cols-3">
          <div className="col-span-2"><Form2/></div>
          <div className="col-span-1"><FormThree/></div>
      </div>
      

      </main>
    
    </div>
  )
}

export default Dashboard
