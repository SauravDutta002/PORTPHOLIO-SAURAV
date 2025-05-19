
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Header from './Header';
import Sidebar from './Sidebar';

import Footer from './Footer';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="h-screen  overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Header />
          <Outlet context={{ setNotification }}/>
        </div>
      </div>
      <Footer notification={notification}/>
    </div>
  );
};

export default Layout;
