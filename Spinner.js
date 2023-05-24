import React, { Component } from 'react'
import loading from "./loading.gif";


// export class spinner extends Component {
  const spinner = ()=> {
 
    return (
        <div className = "text-center">

        <img src = {loading} alt ="loading"/>
          
        </div>
    )
  }


export default spinner

