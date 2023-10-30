import React, { Component } from 'react';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            description: '',
            logo: null
        };

        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        const { name, value, type, files } = event.target;
        if (type === "file") {
            this.setState({ [name]: files[0] });
        } else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // Add submission logic here
    }

    handleCancel() {
        this.setState(this.initialState);
    }

    render() {
        return (
            <div>
                <h3>Create New Shop</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.name} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea 
                            className="form-control" 
                            name="description"
                            value={this.state.description} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Logo:</label>
                        <input 
                            type="file" 
                            className="form-control" 
                            name="logo"
                            onChange={this.handleChange} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}
