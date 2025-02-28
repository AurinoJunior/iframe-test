import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

// Changes the iframe route
export const useChangeRoute = () => {
  const changeRoute = (pathname) => {
    window.parent.postMessage(
      {
        type: "NAVIGATE",
        payload: pathname,
      },
      "*"
    );
  };

  return changeRoute;
};

// Sends the Login event to the parent
export const useLogin = () => {
  const login = () => {
    window.parent.postMessage(
      {
        type: "LOGIN",
      },
      "*"
    );
  };

  return login;
};

// Sends the iframe height to the parent
export const useIframeHeight = () => {
  const iframeHeight = (height) => {
    window.parent.postMessage(
      {
        type: "HEIGHT",
        payload: height,
      },
      "*"
    );
  };

  return iframeHeight;
};

function App() {
  const changeRoute = useChangeRoute();
  const login = useLogin();
  const iframeHeight = useIframeHeight();
  const appRef = useRef(null); // Listen to the iframe height
  const [data, setUserData] = useState(null); // Store the user data

  // DATA - Receives user Data
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

  // Height - Sends the iframe height to the parent
  useEffect(() => {
    const appElement = appRef.current;

    if (appElement) {
      const { height } = appElement.getBoundingClientRect();
      iframeHeight(height);
    }
  }, [iframeHeight]);

  return (
    <div className="App" style={{ height: "500px" }} ref={appRef}>
      <header className="App-header" style={{ height: "500px" }}>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => changeRoute("/")}>Navigate to Home</button>

        <button onClick={login}>Open login drawer</button>

        {JSON.stringify(data)}

        <p>Iframe test webpage</p>
      </header>
    </div>
  );
}

export default App;
