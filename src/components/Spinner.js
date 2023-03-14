import React, { Component } from 'react'
import loader from '../loader.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-centre'>
        <img src={loader} alt="loader" />
      </div>
    )
  }
}
export default Spinner
