import SlotM from "./SlotM";

function App() {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to {" "}
        <span style={{
          fontWeight: "bold", background: '#c7c7c7',
          padding: '3px 6px'
        }}>Slot machine games</span>
        🎰</h1>
      <div className="slots">
        <div className="slotmachine">
          <SlotM x='😆' y='😆' z='😆' />
          <SlotM x='😘' y='😆' z='😆' />
          <SlotM x='🎊' y='🎊' z='😘' />
        </div>
      </div>
    </>
  );
}
export default App;
