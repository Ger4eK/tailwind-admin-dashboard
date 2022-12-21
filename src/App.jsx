import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
import { Sidebar, Navbar } from './components';
import { useStateContext } from './contexts/ContextProvider';
import { Calendar, Customers, Ecommerce, Employees, Orders } from './pages';

function App() {
  const { activeMenu } = useStateContext();
  return (
    <>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4 style z-[1000]'>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-lg text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? ' md:ml-72' : ' flex-1'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps  */}
                <Route path='/kanban' element='kanban' />
                <Route path='/editor' element='editor' />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element='color-picker' />

                {/* Charts  */}
                <Route path='/line' element='line' />
                <Route path='/area' element='area' />
                <Route path='/bar' element='bar' />
                <Route path='/pie' element='pie' />
                <Route path='/financial' element='financial' />
                <Route path='/color-mapping' element='color-mapping' />
                <Route path='/pyramid' element='pyramid' />
                <Route path='/stacked' element='stacked' />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
