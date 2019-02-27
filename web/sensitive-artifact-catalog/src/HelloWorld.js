import React, {
  Component
} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.toSpanish = this.toSpanish.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  toSpanish() {
    this.setState({ greeting: 'Hola' });
  }

  render() {
    return (
      <div className="HelloWorld" > {this.state.greeting} {this.props.name}!
      <br />
        <button onClick={this.toSpanish}>Change to Spanish</button>
        <br />
        <button onClick={this.removeGreeting}>Remove</button>
      </div>
    );
  }
}


export default HelloWorld;