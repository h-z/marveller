import React, { Component } from 'react';
import './SearchFilter.css';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class SearchFilter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.handler(e);
  }

  render() {
    return (
      <Form inline>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search for character"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchFilter;
