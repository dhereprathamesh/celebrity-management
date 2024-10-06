import { Toaster } from "react-hot-toast";
import "./App.css";
import CelebrityList from "./CelebrityList/CelebrityList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CelebrityList />
      <Toaster />
    </>
  );
}

export default App;
