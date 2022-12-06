import {Routes, Route} from 'react-router-dom'
import Landing from './screens/landing';
import Search from './screens/search';

function App() {
  return (
    <AppRoutes/>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default App;
