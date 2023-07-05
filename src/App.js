import Accordion from "./Accordion/Accordion";
import "./App.css";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";
import TabInfoOne from "./Tabs/TabInfoOne";
import TabInfoThree from "./Tabs/TabInfoThree";
import TabInfoTwo from "./Tabs/TabInfoTwo";
import Calc from "./Calculator/Calc";

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






    </div>
  );
}

export default App;
