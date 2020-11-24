import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { name, type, value, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return <FormComponent onChange={this.onChange} {...this.state} />;
  }
}

export default FormContainer;
