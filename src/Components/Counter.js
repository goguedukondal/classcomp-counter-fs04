import { Component } from "react";
class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    
     

    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>increase</button>
                <button onClick={()=>{this.setState({count:this.state.count-1})}}>Dicrease</button>
            </div>
        )
    }
}

export default Counter

