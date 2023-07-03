import TabItem from "./TabItem";

const Tabs = ({ setActiveTab }) => {
  return (
    <div>
      {["tab one", "tab two", "tab three"].map((tab, index) => (
        <TabItem
          kei={index}
          tab={tab}
          index={index}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
