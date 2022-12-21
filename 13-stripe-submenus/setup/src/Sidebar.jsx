import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobaContext } from '.context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={
      `sidebar-wrapper ${isSidebarOpen? 'show' : ''}`
    }>
      <div className="sidebar">
        <button 
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {
            sublinks.map(({ links, page }, index) => {
              return (
                <article key={ index }>
                  <h4>{ page }</h4>
                  <div className="sidebar-sublinks">
                    {
                      links.map(({ url, icon, label }, index) => {
                        return (
                          <a key={ index } href={ url }>
                            { icon }
                            { label }
                          </a>
                        )
                      })
                    }
                  </div>
                </article>
              )
            });
          }
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
