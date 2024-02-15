import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-[4.4rem] w-full  h-[3.5rem] flex justify-between items-center px-4 bg-white border-t border-gray-300">
      <button className=" absolute left-[60rem] flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:text-blue-700 font-semibold py-2 px-4 rounded">
        <span className="w-4 h-4 inline-block border-2 border-gray-400 rounded-sm"></span> 
        No Degree
      </button>
      <button className=" absolute left-[70rem] flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:text-blue-700 font-semibold py-2 px-4 rounded">
        <span className="w-4 h-4 inline-block border-2 border-gray-400 rounded-sm"></span> 
        Active
      </button>
      <button className="absolute left-[78rem] text-red-700 bg-red-100 hover:bg-red-200 font-semibold py-2 px-4 rounded">
        Cancel
      </button>
      <button className="absolute left-[84rem] text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded">
        Save
      </button>
    </div>
  );
};

export default Footer;
