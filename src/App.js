import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueryPage from './pages/QueryPage';
import RequestPage from './pages/RequestPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter initialEntries={["/users/mjackson"]}>
      <Routes>
        <Route exact path="/" element={<RequestPage />} />
        <Route path="/querypage" element={<QueryPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
