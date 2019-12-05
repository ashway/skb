import React from 'react';
import _ from 'lodash';
import decode from 'ent/decode';
import "./style.scss"

//- Нагло стащил из интернетов!
const format = (num, n, x) => {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return (num||0).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
};



class Card extends React.Component {



    render() {
        let data = this.props.data;
        return (
            <div className={`card ${data.priority==1?'active':''}`}>
                <div className="f-xxsmall">{`${data.priority==1?'Лучшее предложение для Вас':'Возможно Вас заинтересует'}`}</div>
                <div><span className="f-sbig">{decode(data.product_title||'')}<br/></span>(со справкой о доходах)</div>
                <div className="card-table">
                    <div>
                        <div>Сумма</div>
                        <div>Ежемесячный платеж</div>
                        <div>Срок</div>
                        <div>Ставка</div>
                    </div>
                    <div>
                        <div>{data.limit?`${format(data.limit)} ₽`:'-'}</div>
                        <div>{data.payment?`${format(data.payment)} ₽`:'-'}</div>
                        <div>{data.term||'-'} месяцев</div>
                        <div>{data.rate||'-'}%</div>
                    </div>
                </div>
                <div className="inline-block"><div className="button" onClick={()=>this.props.setOffer(data)}>Получить деньги</div></div>
            </div>
        )
    }

}

export default Card;