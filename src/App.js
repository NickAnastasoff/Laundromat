import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import About from './pages/about';
import Navbar from './components/navbar/navbar';

function App() {
return (
	<Router>
  <Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
	</Routes>
	</Router>
);
}

export default App;
