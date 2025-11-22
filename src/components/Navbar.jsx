import React from 'react';

const Navbar = () => {
    return (
<div className="w-full flex justify-between items-center px-10 py-5 bg-white shadow container mx-auto">

  <h1 className="text-xl font-bold">CS — Ticket System</h1>

  <div className="flex items-center space-x-6 font-medium">

   
    <div className="hidden md:flex space-x-6">
      <a>Home</a>
      <a>FAQ</a>
      <a>Changelog</a>
      <a>Blog</a>
      <a>Download</a>
      <a>Contact</a>
    </div>

    
    <button className="px-4 py-2 bg-linear-to-tr from-[#4c229f] to-[#8c54c3] text-white rounded-lg">
      + New Ticket
    </button>

  </div>
</div>

    );
};

export default Navbar;