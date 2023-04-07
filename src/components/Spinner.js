import React from 'react'
import loader from '../loader.gif'
const Spinner = () => {

    return (
      <div className='d-flex justify-content-center align-items-centre'>
        <img src={loader} alt="loader" />
      </div>
    )
  }

export default Spinner
