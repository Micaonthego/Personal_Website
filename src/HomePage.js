import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className='text-box'>
                        <h1 className='heading-primary'>
                            <span className='heading-primary-main'>Hello!, ¡Hola!</span>
                            <span className='heading-primary-sub'>I'm Micaela Rivera, a Full-stack web developer</span>
                        </h1>
                        <Link to='/portfolio'>
                            <button>GET TO KNOW ME</button>
                        </Link>
                    </div>
                </header>

            </React.Fragment>
        )
    }
}

export default HomePage