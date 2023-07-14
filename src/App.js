import Accordion from "./Accordion/Accordion";
import "./App.css";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";
import TabInfoOne from "./Tabs/TabInfoOne";
import TabInfoThree from "./Tabs/TabInfoThree";
import TabInfoTwo from "./Tabs/TabInfoTwo";
import Calc from "./Calculator/Calc";
import Content from "./Modal/Content";
import Modal from "./Modal/Modal";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Accordion />

      <Calc/>

      <Tabs setActiveTab={setActiveTab} />
      {activeTab === 0 && <TabInfoOne />}
      {activeTab === 1 && <TabInfoTwo />}
      {activeTab === 2 && <TabInfoThree />}

    <button onClick={()=> setIsOpen(true)}>Open Modal</button>

      {isOpen &&
      <Modal setIsOpen={setIsOpen}>
      <Content setIsOpen={setIsOpen} />
      </Modal>
      }
       </div>
  );
}

export default App;
