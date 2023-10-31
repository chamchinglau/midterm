import React, { Component } from 'react';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        // Create ref for file input
        this.logoInput = React.createRef();

        this.state = {
            name: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted", this.state);
        // Add here your submit logic
    }

    handleCancel() {
        this.setState({ name: '', description: '' });
        this.logoInput.current.value = ""; // Reset file input
    }

    render() {
        return (
            <div>
                <h2>New Shop</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control" >
                        <label>
                            Name:
                            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-control" >
                        <label>
                            Description:
                            <textarea name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label>
                            Logo:
                            <input type="file" ref={this.logoInput} />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}
