import Accordion from "./Accordion/Accordion";
import "./App.css";
import Tabs from "./Tabs/Tabs";
import { useEffect, useState } from "react";
import TabInfoOne from "./Tabs/TabInfoOne";
import TabInfoThree from "./Tabs/TabInfoThree";
import TabInfoTwo from "./Tabs/TabInfoTwo";
import Calc from "./Calculator/Calc";
import Content from "./Modal/Content";
import Modal from "./Modal/Modal";
import LoaderPage from "./Loader/LoaderPage";
import Addsong from "./Addsong/Addsong";
import Count from "./UseReducer/useReducer";


function App() {

   // LOADER

  const[stateLoader, setStateLoader] = useState(true);
  useEffect (() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer);
  }, [])

  // TABS
  const [activeTab, setActiveTab] = useState(0);


  // MODAL
  const [isOpen, setIsOpen] = useState(false);

 

  // https://mhnpd.github.io/react-loader-spinner/docs/components/ball-traingle


  return (
    
    <div>
      <Accordion />

      <Calc/>

      <Tabs setActiveTab={setActiveTab} />
      {activeTab === 0 && <TabInfoOne />}
      {activeTab === 1 && <TabInfoTwo />}
      {activeTab === 2 && <TabInfoThree />}

    {/* MODAL */}
    <button onClick={()=> setIsOpen(true)}>Open Modal</button>

      {isOpen &&
      <Modal setIsOpen={setIsOpen}>
      <Content setIsOpen={setIsOpen} />
      </Modal>
      } 

      {/* LOADER */}

      { stateLoader && <LoaderPage />}

      <Addsong />

      <Count />

       </div>
  );
}

export default App;
