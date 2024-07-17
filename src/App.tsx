import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './ScrollToTop';

import { Dashboard } from './pages/dashboard';

function App() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <BrowserRouter>
                <ScrollToTop />
                <ToastContainer position="top-center" limit={2} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
