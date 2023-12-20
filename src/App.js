import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPower from "./components/MyPower";
import { Knowledge } from "./components/Knowledge";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <MyPower />
      <Knowledge />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
