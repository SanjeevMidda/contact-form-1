import "./index.css";

function App() {
  // Create form
  // Create state
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
                <input type="text" name="" />
              </label>
            </div>

            <div className="div">
              <label>
                Last name
                <input type="text" name="" />
              </label>
            </div>
          </div>

          <label htmlFor="">
            Email
            <input type="text" name="email" />
          </label>

          <label htmlFor="">
            Phone number
            <input type="text" name="phone number" />
          </label>

          <label htmlFor="">
            Message
            <textarea
              type="textArea"
              name="message"
              rows={5}
              cols={10}
            ></textarea>
          </label>

          <button>Send message</button>
        </form>
        <div className="imgWrapper">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
