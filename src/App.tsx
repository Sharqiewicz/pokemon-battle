import React, { FunctionComponent } from 'react';
import { gsap } from "gsap";
import Loading from './components/loading/Loading'

function App()  {
  return (
    <div className="App">
      <h2>pokemon battle</h2>
      <Loading/>
    </div>
  );
}

export default App;
