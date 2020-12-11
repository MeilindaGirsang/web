import React from 'react'

const defaultState = {
    email: null,
    emailError: null
}

class EmailValidation extends React.Component {

    constructor() {
        super();
        this.state = defaultState;

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    validate() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.email || reg.test(this.state.email) === false) {
            this.setState({ emailError: "Email Field is Invalid" });
            return false;
        }
        return true;
    }

    submit() {
        if (this.validate()) {
            console.warn(this.state);
            this.setState(defaultState);
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <h3>Custom Email Validation</h3><br />

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email :</label>
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                <span className="text-danger">{this.state.emailError}</span>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default EmailValidation;