import React from "react";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => {
  return (
    <React.Fragment>
      <SmurfList />
      <AddSmurfForm />
    </React.Fragment>
  );
};

export default App;
