import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TrelloJobBoard from './TrelloJobBoard';
import Navbar from './Navbar';
import Search from './Search';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <nav>One Job, Please</nav>
            <Navbar />
            {/* <h1>Subtitle</h1> */}
          </div>
          <Route exact path="/jobboard" component={TrelloJobBoard} />
          <Route exact path="/search" component={Search} />
        </div>
        <footer class="footer">
          <div class="container">
            <span class="text-muted">
              I tried to make a footer. Copyright Katie 2020.
            </span>
          </div>
        </footer>
      </Router>
    );
  }
}

//we'll eventually need to change this to have a mapDispatchToProps to load jobs
export default Routes;
