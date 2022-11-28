import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);


	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(falses);
	};


	return (
		<AppContext.Provider 
			value={{
				isSidebarOpen
				isModalOpen,
				openSidebar,
				openModal,
				closeSidebar,
				closeSidebar
			}}
		>
			{ children }
		</AppContext.Provider>
	);
};

// custom hook
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };