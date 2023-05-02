import SlotM from "./SlotM";

function App() {
  return (
    <>
      <h1 className="heading_style">
        Welcome to {" "}
        <span style={{ fontWeight: "bold" }}>Slot machine games</span>
      </h1>
      <div className="slotmachine">
        <SlotM x='😆' y='😆' z='😆' />
        <SlotM x='😘' y='😆' z='😆'/> 
        <SlotM x='🎊' y='🎊' z='😘'/>
      </div>
    </>
  );
}
export default App;
