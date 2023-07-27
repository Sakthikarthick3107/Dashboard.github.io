import React from 'react';
import {PlusIcon ,ViewGridIcon} from '@heroicons/react/outline'


const SideDrawer = ({ isOpen, onClose  }) => {
  return (
    <div
      className={`fixed top-10 left-0 h-full w-60 text-white bg-neutral-800 text- p-4 transform transition-transform ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'  
      }`}
    >
      
      <div className="block">
        <button className="bg-white text-black h-15 p-2  w-full rounded-md pt-1 pb-1 hover:bg-slate-200" >
          <div className="flex items-center ml-5 py-2"><PlusIcon className="h-5 mr-2"/><p>New Item</p></div> 
        </button><br/><br/>
        <hr className="border-black border-1 "/>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Dashboard</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Appbuttoncation</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Elements</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Forms</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Plugins</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Elements</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Datagrid</button>
        <button className="my-2 flex w-full text-left ml-4 p-2"><ViewGridIcon className="h-5 mr-1"/>Settings</button>
      </div>



    </div>
  );
};

export default SideDrawer;

