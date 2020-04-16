import React from 'react';
import '../src/styling/App.css';
import '../src/styling/Navigation.css';
import '../src/styling/About.css';
import '../src/styling/Contact.css';
import '../src/styling/Projects.css';
import '../src/styling/Footer.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from '../src/Footer.jsx';
import Navigation from './Navigation.jsx';

class App extends React.Component {
  state = { serverMessage: '' };

  // componentDidMount() {
  //   fetch('/api/demo')
  //     .then(response => response.json())
  //     .then(data => this.setState({ serverMessage: data.message }));
  // }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
