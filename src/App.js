import logo from "./logo.svg";
import Landingpage from "./pages/landingpage";
import MainPage from './pages/Mainpage';
import {BrowserRouter} from 'react-router-dom'
import "./pages/landingpage.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <MainPage />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
