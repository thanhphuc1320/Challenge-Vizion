import React from "react";
import "./index.css";

const StringUpNo = () => {
  const ref = React.useRef()
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState("Vui lòng nhập dòng bất kì")
  const handleChangeInput = () => {
    const stringValue = input
    if(stringValue) {
      const convertString = stringValue.trim().split('')
      let lastValue = convertString[convertString.length - 1]
      convertString.pop();
      lastValue = Number(lastValue) ? Number(lastValue) + 1 : lastValue + '1'
      setResult(convertString.concat(lastValue).join(""))
      setInput("")
      ref.current.value = ''
    }
  };

  return (
    <div className="css-container">
      <div className="form-field">
        <input
        ref= {ref}
          type="text"
          placeholder=" "
          className="form-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <label htmlFor="name" className="form-label">
          Nhập
        </label>
      </div>
      <button className="button button-hover" onClick={handleChangeInput}> Submit</button>

      <div className="text-result">{result}</div>
    </div>
  );
};

export default StringUpNo;
