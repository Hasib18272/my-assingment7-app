import React from 'react';

const Footer = () => {
    return (
<div className="w-full bg-black text-white px-10 py-16 text-sm">
  
  <div className="grid grid-cols-5 gap-10">

  
    <div className="col-span-2"> 
      <h2 className="font-bold text-lg mb-4">CS — Ticket System</h2>
      <p className="text-gray-400 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

   
    <div className="space-y-3">
      <h3 className="font-bold mb-4 text-white">Company</h3>
      <p className="text-gray-400 hover:text-white cursor-pointer">About Us</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Our Mission</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Contact Sales</p>
    </div>

    
    <div className="space-y-3">
      <h3 className="font-bold mb-4 text-white">Services</h3>
      <p className="text-gray-400 hover:text-white cursor-pointer">Products & Services</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Customer Stories</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Download Apps</p>
    </div>

    {/* Column 4: Information */}
    <div className="space-y-3">
      <h3 className="font-bold mb-4 text-white">Information</h3>
      <p className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Terms & Conditions</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">Join us</p>
    </div>

    
    <div className="space-y-3">
      <h3 className="font-bold mb-4 text-white">Social Links</h3>
      
      
      <p className="text-gray-400 hover:text-white cursor-pointer">@CS — Ticket System</p> 
      <p className="text-gray-400 hover:text-white cursor-pointer">@CS — Ticket System</p>
      <p className="text-gray-400 hover:text-white cursor-pointer">@CS — Ticket System</p>
      
      
      <p className="text-gray-400 hover:text-white cursor-pointer pt-3">support@cst.com</p>
    </div>

  </div>


  <div className="mt-16 pt-6 border-t border-gray-800 text-center text-gray-500">
    © 2025 CS — Ticket System. All rights reserved.
  </div>
</div>
    );
};

export default Footer;