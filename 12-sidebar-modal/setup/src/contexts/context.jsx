import React, { useState, useContext } from 'react';

const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider value="hello">
			{ children }
		</AppContext.Provider>
	);
};

export default AppProvider;