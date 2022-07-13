import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthContext } from './contexts';

import Container from 'react-bootstrap/Container';

import HeaderBar from './components/HeaderBar';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Cas from './pages/Cas';
import Compute from './pages/Compute';
import Jobs from './pages/Jobs';
import Mas from './pages/Mas';
import Report from './pages/Report';
import Report1 from './pages/Report1';
import Mas1 from './pages/Mas1';

function App() {
  const [authInfo, setAuthInfo] = useState({
    authenticated: false,
    user: "",
    tokenInfo: {},
    session: {},
    csrf: {}
  });
  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
      <Router>
        <Container>
          <HeaderBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cas" exact component={Cas} />
            <Route path="/jobs" exact component={Jobs} />
            <Route path="/compute" exact component={Compute} />
            <Route path="/mas" exact component={Mas} />
            <Route path="/mas1" exact component={Mas1} />
            <Route path="/logon" exact component={Logon} />
            <Route path="/Report" exact component={Report} />
            <Route path="/Report1" exact component={Report1} />
          </Switch>
        </Container>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
