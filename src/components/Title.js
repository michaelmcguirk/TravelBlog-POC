import React from 'react'
import titleImage from './../assets/images/title.png'

const Title = props => {
    return (
        //<div className="title">Feeding Mosquitos</div>
        <div className="title"><img style={{"maxHeight": "70%", "maxWidth": "100%"}} src={titleImage}/></div>
        
    )
}

export default Title;