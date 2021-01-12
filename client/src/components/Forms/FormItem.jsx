import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import "../../styles/form.css";
// import axios from "axios";
import apiHandler from "../../api/apiHandler";

class ItemForm extends Component {
  state = {
    name: "",
    category: "Plant",
    quantity: "",
    description: "",
    location: {
      // type: "Point",
      coordinates: [],
    },
    // image: [],
  };

  handleChange = (event) => {
    // this.setState({});
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    console.log(event.target);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name: this.state.name,
      category: this.state.category,
      quantity: this.state.quantity,
      description: this.state.description,
      location: this.state.location,
      // image: this.state.image,
    };
    apiHandler.postItems(obj).then((res) => this.props.history.push("/"));

    // console.log(obj);

    // axios.post("http://localhost:4000/api/item", obj).then((apiResponse) => {
    //   this.props.history.push("/item");
    //   // console.log(“Created !“);
    //   console.log(apiResponse);
    // });

    // In order to send back the data to the client, since there is an input type file you have to send the
    // data as formdata.
    // The object that you'll be sending will maybe be a nested object, in order to handle nested objects in our form data
    // Check out the stackoverflow solution below : )

    // Nested object into formData by user Vladimir "Vladi vlad" Novopashin @stackoverflow : ) => https://stackoverflow.com/a/42483509
  };

  handlePlace = (place) => {
    // this.state.location.coordinates = place.center;
    //   const cat= {name:"foo"}
    //   cat.name = "feaofa"
    this.setState({
      location: {
        //  ...this.state.location,
        coordinates: place.center,
      },
    });
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(place);
  };

  render() {
    return (
      <div className="ItemForm-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              value={this.state.name}
              name="name"
              className="input"
              type="text"
              onChange={this.handleChange}
              placeholder="What are you giving away ?"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
              // defaultValue="-1"
            >
              <option value="-1" disabled>
                Select a category
              </option>
              {/* <option value="" selected>Select a category</option> */}
              <option value="Kombucha">Kombucha</option>
              <option value="Plant">Plant</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="input"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
              type="number"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete
              onSelect={this.handlePlace}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              value={this.state.description}
              name="description"
              className="text-area"
              placeholder="Tell us something about this item"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input
              className="input"
              onChange={this.handleChange}
              name="image"
              type="file"
            />
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input type="radio" />
              user email
            </div>
            <input type="radio" />
            contact phone number
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <button className="btn-submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
