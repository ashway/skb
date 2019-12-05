import React from 'react';
import "./style.scss"
class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="content">
                    <div className="logo"/>
                    <div className="phone">
                        <div className="f-big bold">8 800 1000 600</div>
                        <div className="f-xsmall">Бесплатный звонок по России</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;