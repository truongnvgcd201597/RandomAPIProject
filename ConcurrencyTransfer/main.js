
const currencies = [
    'AED', // United Arab Emirates dirham
    'AFN', // Afghan afghani
    'ALL', // Albanian lek
    'AMD', // Armenian dram
    'ANG', // Netherlands Antillean guilder
    'AOA', // Angolan kwanza
    'ARS', // Argentine peso
    'AUD', // Australian dollar
    'AWG', // Aruban florin
    'AZN', // Azerbaijani manat
    'BAM', // Bosnia and Herzegovina convertible mark
    'BBD', // Barbadian dollar
    'BDT', // Bangladeshi taka
    'BGN', // Bulgarian lev
    'BHD', // Bahraini dinar
    'BIF', // Burundian franc
    'BMD', // Bermudian dollar
    'BND', // Brunei dollar
    'BOB', // Bolivian boliviano
    'BRL', // Brazilian real
    'BSD', // Bahamian dollar
    'BTC', // Bitcoin
    'BTN', // Bhutanese ngultrum
    'BWP', // Botswana pula
    'BYN', // Belarusian ruble
    'BYR', // Belarusian ruble (old)
    'BZD', // Belize dollar
    'CAD', // Canadian dollar
    'CDF', // Congolese franc
    'CHF', // Swiss franc
    'CLF', // Chilean Unit of Account (UF)
    'CLP', // Chilean peso
    'CNH', // Chinese yuan (offshore)
    'CNY', // Chinese yuan
    'COP', // Colombian peso
    'CRC', // Costa Rican colón
    'CUC', // Cuban convertible peso
    'CUP', // Cuban peso
    'CVE', // Cape Verdean escudo
    'CZK', // Czech koruna
    'DJF', // Djiboutian franc
    'DKK', // Danish krone
    'DOP', // Dominican peso
    'DZD', // Algerian dinar
    'EGP', // Egyptian pound
    'ERN', // Eritrean nakfa
    'ETB', // Ethiopian birr
    'EUR', // Euro
    'FJD', // Fijian dollar
    'FKP', // Falkland Islands pound
    'GBP', // British pound
    'GEL', // Georgian lari
    'GGP', // Guernsey pound
    'GHS', // Ghanaian cedi
    'GIP', // Gibraltar pound
    'GMD', // Gambian dalasi
    'GNF', // Guinean franc
    'GTQ', // Guatemalan quetzal
    'GYD', // Guyanese dollar
    'HKD', // Hong Kong dollar
    'HNL', // Honduran lempira
    'HRK', // Croatian kuna
    'HTG', // Haitian gourde
    'HUF', // Hungarian forint
    'IDR', // Indonesian rupiah
    'ILS', // Israeli new shekel
    'IMP', // Manx
    'USD', // United States dollar
    'INR', // Indian rupee
    'VND', // Vietnamese đồng
    'JPY', // Japanese yen
    'KRW', // South Korean won
    'CNY', // Chinese yuan
    'RUB', // Russian ruble
    'EUR', // Euro
    'GBP', // British pound
    'AUD', // Australian dollar
    'CAD', // Canadian dollar
    'NZD', // New Zealand dollar
];

function createCurrencySelect(currencies, containerId, valueName) {
    const optionSelect = document.createElement('select');
    optionSelect.className = valueName;
    const formInput = document.getElementById(containerId);
    currencies.forEach(crc => {
        const optionValue = document.createElement('option');
        optionValue.setAttribute('value', crc);
        optionValue.innerHTML = crc;
        optionSelect.appendChild(optionValue);
    });
    formInput.appendChild(optionSelect);
}
createCurrencySelect(currencies, "form-section", "input-currency");
createCurrencySelect(currencies, "form-section", "output-currency");

const inputCurrency = document.querySelector('.input-currency');
const outputCurrency = document.querySelector('.output-currency');
const inputVal = document.getElementById('currency-input');
const formSection = document.getElementById('form-section');

formSection.addEventListener('submit', (e) => {
    e.preventDefault();
    getConcurrenciesTrade();
});


async function getConcurrenciesTrade() {
    const inputCurrencyVal = inputCurrency.value;
    const outputCurrencyVal = outputCurrency.value;
    const inputValue = inputVal.value;

    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000',
        headers: { 'X-Api-Key': 'TscOkMVnt77AHmWV1Gxp6g==lQe2rTPr2H9s70sq'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
    }
    const respone = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${outputCurrencyVal}&have=${inputCurrencyVal}&amount=${inputValue}`, options);
    const data = await respone.json();
    console.log(data);
    const output = `    
       <h1>${data.new_amount}</h1>
    `;
    const resultSection = document.getElementById('result-section')
    resultSection.innerHTML = output;  
}

