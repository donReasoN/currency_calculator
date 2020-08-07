{
    const calculate = (amountInput, currencyInput, rateInput) => {
        
        const eurCurrency = 4.4119;
        const usdCurrency = 3.7455;
        const gbpCurrency = 4.8871;
        const cadCurrency = 2.7992;

        if (amountInput && amountInput > 0) {
            switch (currencyInput) {
                case "eur" : {
                    rateInput.value = eurCurrency;
                    return amountInput * eurCurrency;
                }
                case "usd" : {
                    rateInput.value = usdCurrency;
                    return amountInput * usdCurrency;
                }
                case "gbp" : {
                    rateInput.value = gbpCurrency;
                    return amountInput * gbpCurrency;
                    
                }
                case "cad" : {
                    rateInput.value = cadCurrency;
                    return amountInput * cadCurrency;
                }
            };
        } else {
            rateInput.value = "";
            resultInput.value = "";
        }
    }
    
    const onFormSubmit = (event) => { 
        event.preventDefault();

        const currencyInput = document.querySelector('.js-currency').value;
        const amountInput = document.querySelector('.js-amount').value;
        const rateInput = document.querySelector('.js-rate');
        const resultInput = document.querySelector('.js-result');
        
        const result = calculate(amountInput, currencyInput, rateInput)
        
    }


    const init = () => {
        const formElement = document.querySelector('.form');
        formElement.addEventListener('submit', onFormSubmit);
    }

    init();
}