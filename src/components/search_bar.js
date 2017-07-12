import React,{Component} from 'react';

// import ReactDOM from'react-dom';

class SeacrhBar extends Component{
    constructor(props){
        super(props);

        this.state={
            term:''
        };
    }
    render(){
        return( 
                <div>
        
                  {/*<input  onChange={(e)=>this.setState({term:e.target.value})}/>
                  value of input:{this.state.term}*/}
                </div>  
             );
    }

   

}

export default SeacrhBar;