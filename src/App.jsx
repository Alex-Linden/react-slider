import RangeSlider from "./components/RangeSlider";

function App() {

  return (
    <>
      <RangeSlider min={-15} max={-5} value={-7} step={1} />
      <RangeSlider min={5} max={250} value={170} step={1} />
      <RangeSlider min={10} max={20} value={15} step={2} />
    </>
  );
}

export default App;
