import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Admin } from './pages/admin/Admin';
import { ArticleSinglePage } from './pages/article/ArticleSinglePage';
import Main from './pages/main/Main';
import { Register } from './widgets/Register/Register';
import { Login } from './widgets/Login/Login';
function App() {
	const [count, setCount] = useState(0);
	const localData = localStorage.getItem('token');

	if (localData) {
		return (
			<>
				<Routes>
					<Route path='/' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
				<Outlet />
			</>
		);
	} else {
		return (
			<>
				<Routes>
					<Route path='/' element={<Main />} condition={!localData} />
					<Route path='/article:id' element={<ArticleSinglePage />} />
					<Route path='/admin' element={<Register />} />

				</Routes>
				<Outlet />
			</>
		);
	}
}



export default App;
