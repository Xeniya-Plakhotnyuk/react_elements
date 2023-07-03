import Accordion from "./Accordion/Accordion";
import "./App.css";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";
import TabInfoOne from "./Tabs/TabInfoOne";
import TabInfoThree from "./Tabs/TabInfoThree";
import TabInfoTwo from "./Tabs/TabInfoTwo";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Accordion />

      <Tabs setActiveTab={setActiveTab} />
      {activeTab === 0 && <TabInfoOne />}
      {activeTab === 1 && <TabInfoTwo />}
      {activeTab === 2 && <TabInfoThree />}
    </div>
  );
}

export default App;
