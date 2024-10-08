import React from "react"; 
 
const Footer = () => { 
  return ( 
    <div> 
      <footer class="bg-white shadow dark:bg-gray-900"> 
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> 
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
            © 2024{" "} 
            <a href="#" class="hover:underline"> 
              Ahmad Waleed Hamid 
            </a> 
            . All Rights Reserved. 
          </span> 
        </div> 
      </footer> 
    </div> 
  ); 
}; 
 
export default Footer;