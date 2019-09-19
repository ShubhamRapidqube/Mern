import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row p-2" style={{backgroundColor:"#333"}}>>
                        <div className="col-12 text-center">
                            <h4 style={{color:"white", textAlign:"center"}}>Todo</h4>
                        </div>
                    </div>

                    <div className="row" style={{backgroundColor:"#333"}}>
                        <div className="col-12 text-center">
                            <p style={{color:"white", textDecoration:"none"}}><Link to="/">Home</Link> | <Link to="/about">About</Link></p>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Navbar
