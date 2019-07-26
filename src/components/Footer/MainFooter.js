import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Footer extends Component {

  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/legal/">Legal</Link>
        </div>
    )
  }
}

export default class MainFooter extends Footer {}