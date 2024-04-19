
import './App.css';
import Winner from './Winner';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Home';
import Looser from './Looser';
import Biteme from './Biteme';
import NotFound from './NotFound';


function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/winner', element: <Winner />},
    {path: '/looser', element: <Looser />},
    {path: '/biteme', element: <Biteme />},
    {path: '/not' , element: <NotFound />}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
