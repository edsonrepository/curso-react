import React from "react";

import Navbar from './components/Navbar'
import Rotas from './rotas'

const App = () => {

    return (
      <div>
        <div className="container">
          <Navbar />
          <Rotas />
        </div>
      </div>
    );
}
export default App;