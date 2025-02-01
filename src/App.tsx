import './App.css'
import { HttpMethodContextProvider } from './context/httpContext';
import AppRoutes from './routes/AppRoutes';

const App:React.FC = () => {

  return (
    <HttpMethodContextProvider>
      <AppRoutes >
        
      </AppRoutes>
    </HttpMethodContextProvider>
  );
}

export default App;
