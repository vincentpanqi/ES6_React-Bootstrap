import React          from 'react';


class intem3Component extends React.Component {

  constructor(props) {
    // Always call super() as the first thing you do in an extended constructor!
    super(props)

    // In ES6, initial state is set as a property of the class
    this.state = {
    }
  }

  render() {
	
  	return (
         <div className="container">
          <br/>
          <div className="well well-sm">
            <h1 >Page 3</h1>
          </div>

          {this.props.children}

        </div>
  	);
  }
}

export default intem3Component