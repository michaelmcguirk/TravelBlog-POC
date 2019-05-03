import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerMenuIcon';
import Menu from './NavMenu';

const Header = props => {
    return(
        <div className="header">
            <Popup
                modal
                overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
            >
                {close => <Menu className="menu" close={close} />}
            </Popup>
                <div className="title">Six Months</div>
        </div>
    )
}

export default Header;