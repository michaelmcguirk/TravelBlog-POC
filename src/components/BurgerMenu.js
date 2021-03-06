import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerMenuIcon';
import Menu from './NavMenu';

const contentStyle = {
    background: "rgba(255,255,255,0",
    border: "none"
  };
  
const  overlayStyle = {
    background: "rgba(255,255,255,0.98",
}

const BurgerMenu = props => {
    return(
        <div className="burger-menu-container">
            <Popup
                modal
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
            >
                {close => <Menu className="menu" close={close} />}
            </Popup> 
        </div>
    );
}

export default BurgerMenu;