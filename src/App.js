import React,{useState} from "react";
import { BrowserRouter, Route, NavLink ,Prompt,Redirect} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  const[loggin,setLoggin] = useState(false)
  const[age,setAge] = useState(null)

  const logInHandle =()=>{
    setLoggin(!loggin)
  }
  
  const ageHandle =(event)=>{
    setAge(event.target.value)
  }
  return (
    <BrowserRouter>
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
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
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
    </BrowserRouter>
  );
}

export default App;
