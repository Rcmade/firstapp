import React, { useState } from "react";

// import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Alert from "./Components/Alert";
import { Textarea } from "./Components/Textarea";
function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [darkText, setDarkText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  //
  //

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };
  const removeAlert = () => {
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      document.body.style.backgroundColor = "#000020";
      setDarkMode("dark");
      setDarkText("Enable Light Mode", "success");
      document.title = "TEXT AREA, DARK MODE";
      showAlert("The Dark Mode is Enabled", "success");
      removeAlert();
    } else {
      document.body.style.backgroundColor = "white";
      setDarkMode("light");
      setDarkText("Enable Dark Mode");
      showAlert("The Dark Mode is Disebled", "success");
      document.title = "TEXT AREA, LIGHT MODE";
      removeAlert();
    }
  };

  return (
    <>
     {/*  <Router> */}
        <Navbar
          title="THE TEXTAREA"
          about="About"
          darkMode={darkMode}
          toggleMode={toggleMode}
          darkText={darkText}
        />
        <Alert alert={alert} />

        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}

         { /* <Route  path="/"> */}
            <Textarea
              title="Enter Your Text"
              darkMode={darkMode}
              showAlert={showAlert}
              removeAlert={removeAlert}
            />
        { /*  </Route> */}
       {/*  </Switch> */}
     {/*  </Router> */}
    </>
  );
}

export default App;
