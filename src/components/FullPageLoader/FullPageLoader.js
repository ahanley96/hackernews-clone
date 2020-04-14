import React, { Component } from 'react'
import { LoadingGif } from '../../assets/LoadingGif.gif'

export class FullPageLoader extends Component {

    state = {

    }

    render() {
        
        return (
            <div className="loader-container">
                <div className="loader">
                    <img src={LoadingGif}/>
                </div>
            </div>
        )
    }

}

