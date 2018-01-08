import React from 'react';
import ZipForm from './ZipForm.jsx';
import Weather from './Weather.jsx'

const key = 'cb6f700a13e848e6';


export default class App extends React.Component {
  constructor() {
    // tells react to call the constructor for component
  super();
  // must bind the contents now, otherwise when it's called in ZipForm,
  // it won' be attached to this
  this.state = {
    zipcode: '',
    weather: null
  }
  this.setZipCode = this.setZipCode.bind(this)

}

  setZipCode(zipcode){
    this.setState({
      zipcode : zipcode
    })
    fetch(`http://api.wunderground.com/api/${key}/conditions/q/${zipcode}.json`)
    .then( r => r.json() )
    .then(data => {
      const weather = {
        location: data.current_observation.display_location.full,
        temp: data.current_observation.temp_f,
        feelslike: data.current_observation.feelslike_f,
        weather: data.current_observation.weather
      }
      // console.log(weather);
      this.setState({
        weather: weather
      })
      .catch(err => {
        console.log(err)
      })
    })
  }


  render() {
    console.log(this.state.zipcode)

    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipForm zip = {this.setZipCode} />
        {
          this.state.weather ?
          <Weather weather = { this.state.weather} /> :
          <h2> You haven't entered a zipcode </h2>
        }

      </div>
    )
  }
}

// getData(data) {
//   this.setState({
//     weather : weather
//   })
//
//   this.state.city = data.display_location.full
//   this.state.sky = data.weather
//   this.state.temp = data.temp_f
//   this.state.feels_like = data.feelslike_f
//
//   console.log(data)
//   console.log("city", this.state.city)
//   console.log("weather " , this.state.weather)
//   console.log("temperature " , this.state.temp)
//   console.log("Feels like " , this.state.feels_like)
//
// }
