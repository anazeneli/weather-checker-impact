import React from 'react'

export default class ZipForm extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this)
  }
// could instead create a
// const zipCode = props => {} instead of a class
  clicked(event) {
    event.preventDefault()
    const zipcode = document.getElementById('input');
    // props is whatever was sent in by the parent
    this.props.zip(zipcode.value)
  }

  // onClick is a callback
  render() {
    return( <div id="zip-form">
    <input id ='input'  placeholder='Enter your Zip Code' />
    <button onClick= {this.clicked} >Go</button>
    </div>
    )
  }
}
