import React, {Component} from 'react'
import '../styles/Textfield.scss'
class TextField extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
            <button type="submit" style={{color:"blue", marginLeft:"0", background:"white",border:'0'}} value="submit"><i class="fa fa-search " aria-hidden="true"></i></button>

          </label>
        
        </form>
      );
    }
  }

  export default TextField
  
