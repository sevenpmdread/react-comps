import React, { Component } from 'react'
import '../styles/Checkbox.scss'

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
          numberOfEntries: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          <form>
            <input
            id="checkbox-1"
            name="isChecked"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} />
            <label className="checkbox" for="checkbox-1">
              Check me
            </label>
            <br />
            <label style={{visibility: this.state.isChecked ? 'visible' : 'hidden'}}>
              Add conditional input
              <br/>
              <input
                name="numberOfEntries"
                type="number"
                value={this.state.numberOfEntries}
                onChange={this.handleInputChange} />
            </label>
          </form>
        );
      }
}
