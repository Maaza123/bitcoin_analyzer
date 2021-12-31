import React from 'react'
import '../stylesheets/information.css'


const Information = (props) => {
    return(
        <div className='informationBody'>
            <div className='informationHeader margin'>
                <h1>{props.header}</h1>
            </div>
            <div className='informationParagraph margin'>
            <   p>{props.body}</p>
            </div>
        </div>
    )
}

export default Information