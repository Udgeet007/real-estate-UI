import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./pages/homePage/homePage";

export default function App() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
         <Navbar />  
        </div>
       <div className="content">
        <HomePage/>
       </div>
      </div>
    </>
  );
}
