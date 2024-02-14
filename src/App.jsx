// App.jsx
import AppRoutes from './routes';
import './App.css';

// Defining backend's URL
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  return (
    <div>
      <AppRoutes backendUrl={backendUrl} />
    </div>
  );
}

export default App;
