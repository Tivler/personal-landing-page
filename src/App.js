import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages';
import Photos from './pages/Photos';
import Work from './pages/Work';

const App = () => {
  return (
     <Router>
       <Route exact path="/" component={Index} />
       <Route exact path="/work" component={Work} />
       <Route exact path="/gallery" component={Photos} />
     </Router>
  );
}

export default App;
