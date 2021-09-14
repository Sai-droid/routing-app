import React,{useState} from "react";
import { BrowserRouter, Route, NavLink ,Prompt,Redirect} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import messageContext from './contexts/messageContext'
import HomePage from "./pages/HomePage";
function App() {
  const[loggin,setLoggin] = useState(false)
  const[age,setAge] = useState(null)
  const[message,setMessage] = useState("I am being shared")
  const logInHandle =()=>{
    setLoggin(!loggin)
  }
  
  const ageHandle =(event)=>{
    setAge(event.target.value)
  }
  return (
    <BrowserRouter>
    <messageContext.Provider value = {[message,setMessage]} >
      <div className="App">
        <header className="App-header">
          <ul className ="ul-style ">
            <li className ="li-style">
              <NavLink className ="App-Link" exact  to="/" activeClassName="active-link-style"> Home</NavLink>
            </li>
            <li className ="li-style" >
              <NavLink className ="App-Link" exact to="/about" activeClassName="active-link-style" > About </NavLink>
            </li>
            <li className ="li-style" >
              <NavLink className ="App-Link" exact to="/user/john/doe" activeClassName="active-link-style" > user john doe </NavLink>
            </li>
          </ul>
          <Prompt when ={loggin && !age} message ={(location)=>{
            return location.pathname.startsWith('/user')?true:"are you sure"
          }} />
            
          {loggin.toString()}
            <button className="button-style" onClick={logInHandle}>{loggin?"logout":"loggin"}</button>
          <Route
            exact
            path="/"
           component={HomePage}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/user/:username/:lastname"
            render={({ match }) => {
              return loggin ? (
                <>
                <h1>age:{age}</h1>
                <input type ="text" value={age} onChange={ageHandle}></input>
                <h1>
                  Welcome {match.params.username} {match.params.lastname}
                </h1>
                </>
              ):<Redirect to="/" />;
            }}
          />
        </header>
      </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
