import React, { useState } from 'react';
import { data } from './mockData';
import './App.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

import AddNodeModal from './AddNodeModal';
import SettingsModal from './SettingsModal';


function App() {
  const [addUserOpen, setAddUserOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const openAddUser = () => {
    setAddUserOpen(true);
};

  const closeAddUser = () => {
    setAddUserOpen(false);
  };

  const openSettings = () => {
    setSettingsOpen(true);
  }

  const closeSettings = () => {
    setSettingsOpen(false);
  }
  return (
    <div className="App flex flex-col h-screen">
      <div className='header-container flex items-center '>
        <MdChevronLeft size={25} className='ml-2'/>
        {/* this flex-grow div is tailwind way to spread out the back and add buttons*/}
        <div className="flex-grow"></div>
        <button className="mr-4 text-2xl" onClick={openAddUser}>+</button>
      </div>



      <div className='content-container flex-grow'>
        <div className='communities-container mt-4'>
          <h2>Communities</h2>
          <h4>View your nodes</h4>
          <div className='relative flex items-center'>
            {/* useHistory back button */}
            <MdChevronLeft size={35} />
            <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
              {/* this will map links to the nodes instead */}
              {data.map(item => (
                <div key={item.id} className={item.className}></div>
              ))}
            </div>
            <MdChevronRight size={35} />
          </div>
        </div>

        <div className='featured-container mt-4'>
          <h2>Featured</h2>
          <h4>View community nodes</h4>
          <div className='featured-buttons ml-8 mt-2'>
            <button className='underline mr-4'>Trending</button>
            <button className='underline mr-4'>Latest</button>
            <button className='underline mr-4'>Popular</button>
          </div>
          <div className='featured-nodes-homepage flex flex-col items-center'>
            <div className='featured-top'>

            </div>
            <div className='featured-bottom'>

            </div>
          </div>
        </div>
      </div>


{/* This footer will be it's own component and render everywhere after login */}
      <div className='footer-container flex'>

        {/* Link this to home page */}
        <button className="flex flex-col items-center justify-center px-4 py-2 flex-grow">
          <IoMdHome size={32} />
          <span>Home</span>
        </button>

        {/* Link this to My Nodes page */}
        <button className="flex flex-col items-center justify-center px-4 py-2 flex-grow">
          <FaUser size={22} />
          <span>Me</span>
        </button>

        {/* Link this to the featured page */}
        <button className="flex flex-col items-center justify-center px-4 py-2 flex-grow">
          <BiGroup size={32} />
          <span>Community</span>
        </button>

        <button className="flex flex-col items-center justify-center px-4 py-2 flex-grow" onClick={openSettings}>
          <FiSettings size={32} />
          <span>Settings</span>
        </button>
      </div>
      <AddNodeModal addUserOpen={addUserOpen} closeAddUser={closeAddUser} />
      <SettingsModal settingsOpen={settingsOpen} closeSettings={closeSettings} />
    </div>
  );
}

export default App;
