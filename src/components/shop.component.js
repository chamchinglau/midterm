import React, { Component } from 'react';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.logoInput = React.createRef();
        this.state = {
            name: '',
            description: '',
            logo: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileChange(e) {
        this.setState({ logo: e.target.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted", this.state);
        if (this.state.logo) {
            console.log("Uploaded File:", this.state.logo.name);
        }
    }

    handleCancel() {
        this.setState({ name: '', description: '', logo: null });
        this.logoInput.current.value = "";
    }

    render() {
        return (
            <div>
                <h2>New Shop</h2>
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
                            ref={this.logoInput}
                            onChange={this.handleFileChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        );
    }
}
