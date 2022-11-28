import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

// hook at context
const useGlobalContext = () => {
	useContext(AppContext);
};

const AppProvider = ({ children }) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen]     = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = () => {
		setIsSidebarOpen(true);
	};
	const closeSubmenu = () => {
		setIsSidebarOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenu,
				openSidebar,
				openSubmenu,
				closeSidebar,
				closeSubmenu
			}}	
		>
			{ children }
		</AppContext.Provider>
	);	
};


export { AppProvider, useGlobalContext };
