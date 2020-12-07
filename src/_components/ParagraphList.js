import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

export default class ParagraphList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentState: "",

        };
    }
    componentDidMount() {
        this.setState({currentState :`<div>Hello</div>` }); 
    }
    render() {
        return (
            <div id="container">{this.state.currentState}</div>
        )
    };
};

