import { useState } from "react";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const storeInput = (e) => {
    const { name, value } = e.target;

    setUserInput({ ...userInput, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <div className="App">
      <div className="mainWrapper">
        <form onSubmit={onSubmit}>
          <div className="title">
            <div className="circle"></div>
            <h1>FORM UI</h1>
          </div>
          <div className="name">
            <div>
              <label htmlFor="firstName">
                First name
                <input
                  required
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
                  required
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
              required
              type="email"
              name="email"
              value={userInput.email}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="phoneNumber">
            Phone number
            <input
              required
              type="text"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              cols={10}
              value={userInput.message}
              onChange={storeInput}
            ></textarea>
          </label>

          <button type="submit">Send message</button>
        </form>
        <div className="imgWrapper"></div>
      </div>
    </div>
  );
}

export default App;
