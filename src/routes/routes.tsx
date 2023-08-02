import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<h1>This is home</h1>} />
      <Route path="/2" element={<h1>This is home 2</h1>} />
      <Route path="3" element={<h1>This is home 3</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
    </Routes>
  );
}

export default Pages;