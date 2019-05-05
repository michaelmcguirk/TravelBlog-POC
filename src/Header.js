import React from 'react';

const Header = props => {
    return(
        <div className="header">
            {/* <Popup
                modal
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
            >
                {close => <Menu className="menu" close={close} />}
            </Popup> */}
                <div className="title">Six Months</div>
        </div>
    )
}

export default Header;