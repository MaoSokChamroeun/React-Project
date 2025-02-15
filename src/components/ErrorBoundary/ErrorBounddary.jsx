import React,{Component} from "react";
class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }
  static  getDerivedStateFormError(erorr){
    return {
      hasError : true,
    }
  }

  render(){
    if(this.state.hasError){
      return <h1>404 Not Found :(</h1>
    }
    return this.props.children;
  }

 


}

export default ErrorBoundary;