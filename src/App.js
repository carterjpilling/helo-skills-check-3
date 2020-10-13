import React from 'react';
import routes from './routes'


import Nav from './Components/Nav/Nav'



//Displayed Nav and Routes. Need to take screen shots for later. 
function App() {
  return (
    <div>
      <Nav />
      {routes}
    </div>
  );
}


export default App;
