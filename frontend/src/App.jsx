import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BookDetailPage from './pages/BookDetailPage';
import CatalogPage from './pages/CatalogPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/libro/:id" element={<BookDetailPage/>}/>
                <Route path="/catalogo" element={<CatalogPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
