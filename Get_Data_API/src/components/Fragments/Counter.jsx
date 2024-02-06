import React from "react"
import Button from "../Elements/Button/Index"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("constructor");
    }

    componentDidMount() {
        this.setState({ count: 1 });
        console.log("componentDidMount");
    }

    componentDidUpdate(preProps, prevState){
        console.log("Component DidUpadate")
        if(this.state.count === 10){
            this.setState({count:0})
        }
    }

    render() {
        console.log("Render");
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <Button classname="bg-black text-white p-3" onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                </Button>
            </div>
        );
    }
}

export default Counter;
