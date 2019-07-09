import React, {Component} from 'react';

class About extends Component {

    componentDidMount = () => {
        const contentElement = document.getElementById('content')
        if(window.matchMedia("only screen and (max-width: 768px)").matches){
            contentElement.scrollIntoView();
        }
    }
    
    render(){
        return(
            <div className="layer" id="content-layer">
                <div className="content" id="content">
                    <div className="content-header">
                        <h1>About Us</h1>
                    </div>
                    <div>
                        <p>We're Micky and Ciara, welcome to our journey. </p>
                        <p>In January 2019 we set off on a 6 month trip, exploring Latin America, starting in Brazil and working our way around and up into Mexico. From the beautiful desolation of Patagonia to the bustling streets of Mexico City, via the intoxicating heights of the Andes, this has been a life changing experience.</p>
                        <p>One thing that was mostly consistent throughout or trip was that mosquitos love our thick Irish blood, making us a delicious meal for many a mozzie.</p>
                        <p>Micky is a Software Engineer by trade, so this website has been a passion project to allow him to not forget how to code and also to try his hand a more front-end development work. This website has been built using ReactJS and Cockpit CMS.</p>
                        <p>Ciara is a TV Producer who loves writing, seeing this website as a opportunity to create some interesting content.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;