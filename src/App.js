import Form from "./components/Form";

function App() {
  function addValue(name) {}

  return (
    <div className="App">
      <div className="header">
        <h1>The Converter</h1>
        <h3>
          How many kilograms in a pound? <br />1 pound(Lbs) is equal to
          0.45359237 kilograms(Kg), which is the conversion factor from pounds
          to kilograms.{" "}
        </h3>
        <h3>
          This app converts your weight in kilogram(Kg) to pound(Lbs) and vice
          versa.
        </h3>
      </div>

      <div className="form">
        <h1>Convert Here</h1>
        <h3>Convert your own value of lbs to kg in the converter below.</h3>
        <Form addValue={addValue} />
      </div>
    </div>
  );
}

export default App;

