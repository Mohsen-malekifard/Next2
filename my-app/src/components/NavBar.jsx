import React from 'react';

// کامپوننت Header ثابت
// این کامپوننت شامل سه دکمه Home, Cart و ProductsList است
// و با استفاده از Tailwind CSS طراحی شده است.
// برای استفاده در یک پروژه Next.js، می توانید این فایل را در پوشه components/ قرار دهید.

const NavBar = () => {
  return (
    // نوار ناوبری ثابت در بالای صفحه با پس‌زمینه تیره و سایه
    <header className="sticky top-0 z-50 w-full bg-gray-900 p-4 shadow-lg">
      <nav className="flex items-center justify-between mx-auto max-w-7xl">
        
        {/* لوگو یا نام سایت - فعلا به عنوان مثال */}
        <div className="text-2xl font-bold text-gray-50 tracking-wider">
          My App
        </div>

        {/* دکمه‌های ناوبری */}
        <ul className="flex space-x-6 sm:space-x-8">
          {/* دکمه Home */}
          <li>
            {/* در یک پروژه واقعی Next.js، از next/link به جای تگ a استفاده کنید. */}
            <a 
              href="/"
              className="font-medium text-gray-300 hover:text-white transition-colors duration-300
                         hover:bg-gray-700 px-4 py-2 rounded-lg"
            >
              Home
            </a>
          </li>
          
          {/* دکمه Cart */}
          <li>
            <a 
              href="/About"
              className="font-medium text-gray-300 hover:text-white transition-colors duration-300
                         hover:bg-gray-700 px-4 py-2 rounded-lg"
            >
              About
            </a>
          </li>
          
          {/* دکمه ProductsList */}
          <li>
            <a 
              href="/Blog"
              className="font-medium text-gray-300 hover:text-white transition-colors duration-300
                         hover:bg-gray-700 px-4 py-2 rounded-lg"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
