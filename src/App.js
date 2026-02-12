import { useState } from "react";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "undefined",
    message: "",
  });

  const storeInput = (e) => {
    const { name, value } = e.target;

    setUserInput({ ...userInput, [name]: value });
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="App">
      <div className="mainWrapper">
        <form>
          <div className="title">
            <div className="circle"></div>
            <h1>FORM UI</h1>
          </div>
          <div className="name">
            <div>
              <label htmlFor="firstName">
                First name
                <input
                  type="text"
                  name="firstName"
                  value={userInput.firstName}
                  onChange={storeInput}
                />
              </label>
            </div>

            <div className="div">
              <label htmlFor="lastName">
                Last name
                <input
                  type="text"
                  name="lastName"
                  value={userInput.lastName}
                  onChange={storeInput}
                />
              </label>
            </div>
          </div>

          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              value={userInput.email}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="phoneNumber">
            Phone number
            <input
              type="text"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="phoneNumber">
            Message
            <textarea
              name="message"
              rows={5}
              cols={10}
              value={userInput.message}
              onChange={storeInput}
            ></textarea>
          </label>

          <button type="submit" onClick={onSubmit}>
            Send message
          </button>
        </form>
        <div className="imgWrapper"></div>
      </div>
    </div>
  );
}

export default App;
