import React from 'react';
import { Outlet } from 'react-router-dom';

import en from './translate/Languages/en.json';

import './App.css';

export const LanguageContext = React.createContext(en);

function App() {
	return (
		<LanguageContext.Provider value={en}>
			<Outlet />
		</LanguageContext.Provider>
	);
}

export default App;
