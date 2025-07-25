import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }

        console.log( this.props.name + " Child Constructor");
    }

    componentDidMount(){
        console.log( this.props.name + " Child Did Mount");
    };

    render() {
        console.log( this.props.name + " Child Render");
        const { name, location, linkedin } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h3>
                    <a href={linkedin} target="_blank">
                        Linked-In : venkatesh-musham-87653135
                    </a>
                </h3>
                <div>
                    <span> Count : {count} </span>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}> Increment </button>  
                </div> 
            </div>
        )
    };
}

export default UserClass;