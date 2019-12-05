import React from 'react';
import "./style.scss"

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="content">
                    <div className="f-xxsmall">
                        © СКБ-банк, 2019 Генеральная лицензия № 705<br/>Центрального банка Российской Федерации<br/>Адрес банка: г. Екатеринбург, ул. Куйбышева, 75
                    </div>
                    <div className="f-xsmall">Подробнее об условиях и видах кредитов</div>
                    <div className="phone">
                        <div className="f-big bold">8 800 1000 600</div>
                        <div className="f-xsmall">Бесплатный звонок по России</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;