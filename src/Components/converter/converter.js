import React, { Component } from   'react';
import './converter.scss';

class Converter extends Component {
state = {
    currencies: ["USD", "EUR", "UAH", "AUD", "SGD", "PHP" ],
    base: "EUR",
    amount: "",
    convertTo: "UAH",
    result: "",
    date: "",
    new111: []
}



handleSelect = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    },
    this.calculate
    );
};

handleInput = (event) => {
    this.setState({
        amount: event.target.value
    },
    this.calculate
    );
};

calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
        return;
    }
    else {
        fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=4905b0e100e11aab901b2145ef2068ef&format=1?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const date = data.date;
            const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
            this.setState({
                result,
                date
            });
        });
    }
};

handleSwap = (event) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    event.preventDefault();
    this.setState({
        convertTo: base,
        base: convertTo,
        result: null
    },
    this.calculate
    );

};

    render() {
        const {currencies, base, amount, convertTo, result, date} = this.state;

        return(
            <div className='main-form-converter'>
                <h2>{amount} {base} еквівалентно</h2>
                <h2>{result} {convertTo}</h2>
                <h3>станом на {date}</h3>

                <div className='form-row'>
                    <div className='row-input'>
                        <p>Міняю</p>
                        <form className='form-inline'
                        >
                            <input className='form-inline-input'
                            type="number"
                            value={amount}
                            onChange={this.handleInput}
                            />
                            <select className='form-inline-select'
                            name='base' 
                            value={base}
                            onChange={this.handleSelect}
                            >
                                {currencies.map(currency => (
                                    <option key={currency}>{currency}</option>
                                    ))}
                            </select>
                        </form>
                        <p className='swap' onClick={this.handleSwap}>&#8659;&#8657;</p>

                        <p>Отримую</p>
                        <form className='form-inline'>
                            <input className='form-inline-input'
                            disabled={true}
                            value={result}
                            />
                            <select className='form-inline-select'
                            name='convertTo'
                            value={convertTo}
                            onChange={this.handleSelect}>
                                {currencies.map(currency => (
                                    <option key={currency}>{currency}</option>
                                    ))}
                            </select>
                        </form>
                       
                    </div>

                  

                </div>

            </div>
        )
    }
};

export default Converter;