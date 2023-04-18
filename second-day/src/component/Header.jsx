import React from "react";


class Header extends React.Component{
constructor(props){
  super(props);
  this.state = {
    cart:[],
      title: ''
    }
     
    

  
     
  handleChange =(e)=>{
    this.setState({title:e.target.value})
  };
  handleAdd = () =>{
    if(this.state.title !== ''){
      const item = [...this.state.cart, this.state.title]
      this.setState({cart:item, title:''})
      localStorage.setItem("tasklist", JSON.stringify(this.state.cart))
    }
  }
 
 
    render()
       return(
          <>
        <div className="header text-center">
            <h1>My Todo</h1>
        <div><input type="text" value={this.state.title} onChange={this.handleChange} className="inputText mt-3"/>
        <button onClick={this.handleAdd} className="btn btn-primary">Add</button></div>
        </div>
        <div className="card-container">
        { this.state.cart.map((element, i)=>{
            return <li key={i} id={i} className="list" >{element}</li>
        })
        }
        </div>
        </>
    )}
 }





export default Header;