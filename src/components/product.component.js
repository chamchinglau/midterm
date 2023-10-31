import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.photoInput = React.createRef();
        this.state = {
            name: '',
            description: '',
            category: '',
            quantity: 0,
            price: 0.0
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
    }

    handleCancel() {
        this.setState({
            name: '',
            description: '',
            category: '',
            quantity: 0,
            price: 0.0
        });
        this.photoInput.current.value = "";
    }

    render() {
        return (
            <div>
                <h2>New Product</h2>
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
                        <label>Category:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="category" 
                            value={this.state.category} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name="quantity" 
                            value={this.state.quantity} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input 
                            type="number" 
                            step="0.01"
                            className="form-control"
                            name="price" 
                            value={this.state.price} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Photo:</label>
                        <input 
                            type="file" 
                            className="form-control"
                            ref={this.photoInput} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        );
    }
}
