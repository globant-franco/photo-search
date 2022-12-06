import {Routes, Route} from 'react-router-dom'
import Landing from './screens/landing';

function App() {
  return (
    <AppRoutes/>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App;
