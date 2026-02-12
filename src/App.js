import { useState } from "react";
import "./index.css";

function App() {
  // Create state

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [userInput, setUserInput] = useState("");

  const storeInput = (e) => {
    // setUserInput([...userInput, e.target.name: ])
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
                  value={form.firstName}
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
                  value={form.lastName}
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
              value={form.email}
              onChange={storeInput}
            />
          </label>

          <label htmlFor="">
            Phone number
            <input
              type="text"
              name="phone number"
              value={form.phoneNumber}
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
              value={form.message}
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
