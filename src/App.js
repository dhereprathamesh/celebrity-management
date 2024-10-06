import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import CelebrityList from "./pages/CelebrityList/CelebrityList";

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
