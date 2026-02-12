import { useState } from "react";
import "./index.css";

function App() {
  // Create state


  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const storeInput = (e) => {
    setUserInput([...userInput, e.target.name: ])
  };

  console.log(userInput);

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
              <label>
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
              <label>
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

          <label htmlFor="">
            Email
            <input
              type="text"
              name="email"
              value={userInput.email}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="">
            Phone number
            <input
              type="text"
              name="phone number"
              value={userInput.phoneNumber}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="">
            Message
            <textarea
              type="textArea"
              name="message"
              rows={5}
              cols={10}
              value={userInput.message}
              onChange={storeInput}
            ></textarea>
          </label>

          <button>Send message</button>
        </form>
        <div className="imgWrapper"></div>
      </div>
    </div>
  );
}

export default App;
