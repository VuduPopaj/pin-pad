import { useState } from "react";
import "./index.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  // const maxInputs = 3;
  // const lockedTime = 30000;

  const password = "1234";

  const handleButtonClick = (value) => {
    let newInputValue = inputValue + `${value}`;
    setInputValue(newInputValue);
    if (newInputValue.length > 4) {
      setIsUnlocked(false);
      setIsWrong(false);
      setInputValue(`${value}`);
    } else if (newInputValue.length === 4) {
      newInputValue === password ? setIsUnlocked(true) : setIsWrong(true);
    }
  };

  return (
    <main>
      <section>
        <Input value={inputValue} isUnlocked={isUnlocked} isWrong={isWrong} />

        <section className="row">
          <Button value={3} onClick={handleButtonClick} />
          <Button value={2} onClick={handleButtonClick} />
          <Button value={1} onClick={handleButtonClick} />
        </section>
        <section className="row">
          <Button value={6} onClick={handleButtonClick} />
          <Button value={5} onClick={handleButtonClick} />
          <Button value={4} onClick={handleButtonClick} />
        </section>
        <section className="row">
          <Button value={9} onClick={handleButtonClick} />
          <Button value={8} onClick={handleButtonClick} />
          <Button value={7} onClick={handleButtonClick} />
        </section>
        <section className="row">
          <Button value={0} onClick={handleButtonClick} />
        </section>
      </section>
    </main>
  );
}

export default App;
