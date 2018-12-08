import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './containers/AddTodoForm'
import AllTodos from "./containers/AllTodos";

class App extends Component {
    state={

    }
    render() {
        return (
            <Fragment>
                <Header/>
                <AddTodoForm/>
                <AllTodos/>

                <Footer/>
            </Fragment>
        )
  }
}

export default App;
