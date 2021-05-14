import { Component } from "react";
import { Link,Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect:false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info){
        console.error("ErrorBoundary caught an error", error, info);
            if (this.state.hasError) {
              setTimeout(() => this.setState({ redirect: true }), 5000);
            }
          
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/" />;
        }
        else if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listening. <Link to = "/">Click here</Link>{" "}
                    to get back to the home page or wait for 5 seconds.
                </h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;