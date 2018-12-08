import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './components/AddTodoForm'

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header/>
            <AddTodoForm/>

            <Footer/>
        </Fragment>
    )
  }
}

export default App;
