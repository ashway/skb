import React from 'react';
import _ from 'lodash';
import "../scss/base.scss"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import decode from 'ent/decode';

import data from "../data/offers.json";
const offersByPage = 2; //-- Кол-во оферов на странице

//- Дублирование кода... но в рамках тестового задания, делать отдельный файл с утилитами ради 1 функции не стал.
const format = (num, n, x) => {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return (num||0).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
};


class IndexPage extends React.Component {

    state = {
        page: 0,
        offers: _.sortBy(data, ['priority']),
        currentOffer: null
    };

    showModeOffers = (n)=> {
        let newPage = this.state.page+n;
        newPage = newPage<0?0:newPage;
        this.setState({ page: newPage});
    };

    showOffer = (offer)=> {
        this.setState({currentOffer: offer });
    };

    clearOffer = () => {
        this.setState({currentOffer: null});
    }

render() {

    let offerList = this.state.offers.slice(this.state.page*offersByPage, this.state.page*offersByPage+offersByPage);
    let offer = this.state.currentOffer;
    return (
        <div className="container">
            <Header/>
            <div className="main bg image index-page">
                <div className={`men ${this.state.currentOffer?'current-offer':''}`}/>

                {this.state.currentOffer?<div className="offer-page-triangle"/>:null}

                {this.state.currentOffer?
                    <div className="content offer-show">
                        <div><div>
                            <div><div className="icon-v"/></div>
                            <div className="f-xlbig mb20">Поздравляем!</div>
                            <div className="golroy mb40">Мария Александровна! Ваша заявка на кредит наличными одобрена</div>
                            <div className="offer-card flex-as-left mb60">
                                <div className="f-sbig bold">{decode(offer.product_title||'-')}</div>
                                <div className="oc-info mb10">
                                    <div className="f-xlbig bold">{offer.limit?`${format(offer.limit)} ₽`:'-'}</div>
                                    <div>
                                        <div>{offer.term||'-'} месяцев</div>
                                        <div>Срок</div>
                                    </div>
                                    <div>
                                        <div>{offer.payment?`${format(offer.payment)} ₽/мес.`:'-'}</div>
                                        <div>Платёж</div>
                                    </div>
                                    <div>
                                        <div>{offer.rate||'-'}%</div>
                                        <div>Ставка</div>
                                    </div>
                                </div>
                                <div className="gilroy gray f-small">(без справки о доходах по форме банка)</div>
                            </div>

                            <div className="add-info mb60">
                                <div>
                                    <div className="bold mb10">Мы ждём вас по адресу:</div>
                                    <div className="icon loc">г. Астрахань, ул. Кирова, 20/3,<br/>литер А, пом. 37</div>
                                </div>
                                <div>
                                    <div className="bold mb10">Не забудьте с собой взять:</div>
                                    <div className="pass-spr">
                                        <div className="icon pass">паспорт<br/>гражданина РФ</div>
                                        <div className="icon spr">справка<br/>по форме банка</div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex-as-left"><div className="button" onClick={()=>this.clearOffer()}>На главную страницу</div></div>
                      </div></div>
                    </div>:<div className="content offer-list">
                    <div className="f-xbig bold green mb60">Уважаемый Иван Иванович</div>
                    <div className="column">
                        <div>Специально для Вас мы подготовили несколько предложений по кредитованию. Выберите интересующий Вас вариант и нажмите кнопку «Получить деньги» для его получения. Если ни один из вариантов Вам не подходит, нажмите кнопку «Показать дополнительные предложения»</div>
                        <div className="f-small gray">Обращаем Ваше внимание, что в предложениях указана максимальная сумма кредита. В отделении Банка Вы всегда сможете снизить сумму кредита до требуемого размера.</div>
                        <div className="card-container">
                            {_.map(offerList, d=><Card key={d.offer_id} data={d} setOffer={this.showOffer}/>)}
                        </div>
                        {(_.isArray(data) && data.length>offersByPage)?<div className="flex-block space-between mt60">
                            {this.state.page>0?<div className="button border" onClick={()=>this.showModeOffers(-1)}>Назад</div>:null}
                            {_.isArray(this.state.offers) && this.state.page*offersByPage+offersByPage<this.state.offers.length?<div className="button border" onClick={()=>this.showModeOffers(1)}>Показать дополнительные предложения</div>:null}
                        </div>:null}
                    </div>
                </div>}


            </div>
            <Footer/>
        </div>
    )
}

}

export default IndexPage;