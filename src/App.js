import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useLogin, useChangeRoute } from "./hooks";

function App() {
  const login = useLogin();
  const changeRoute = useChangeRoute();

  const [data, setUserData] = useState(null); // Store the user data

  // DATA Receives - listen post message
  const userDataListener = (event) => {
    console.log({ type: event.data.type, payload: event.data.payload });

    if (event.data && event.data.type === "DATA") {
      setUserData(event.data.payload);
    }
  };

  useEffect(() => {
    window.addEventListener("message", userDataListener);

    return () => {
      window.removeEventListener("message", userDataListener);
    };
  }, []);

  return (
    <div className="App" style={{ height: "500px" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => changeRoute("/")}>Navigate to Home</button>
        <button onClick={login}>Open login drawer</button>

        <div
          style={{
            marginTop: 16,
          }}
        >
          {data ? JSON.stringify(data) : "data is empty"}
        </div>
      </div>
    </div>
  );
}

export default App;
