const fromInput = document.querySelector("#from-input");
const toInput = document.querySelector("#to-input");
const currencyFrom = document.querySelector("#from");
const currencyTo = document.querySelector("#to");
const currencyRate = document.querySelector(".exchange_value__result");
const iconExchange = document.querySelector(".exchanger__icon__anchor");

// SET SELECT OPTIONS
async function setOptions() {
  try {
    const result = await fetch(`https://open.exchangerate-api.com/v6/latest`);
    const data = await result.json();

    currencyFrom.remove(currencyFrom.value);
    currencyTo.remove(currencyTo.value);

    for (x in data.rates) {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.text = x;
      option1.value = x;

      option2.text = x;
      option2.value = x;

      currencyFrom.add(option1);
      currencyTo.add(option2);
    }
  } catch (error) {
    alert(error);
  }
}
// CURRENCY CONVERSION
async function calculate() {
  try {
    const fromValue = currencyFrom.value;
    const toValue = currencyTo.value;
    const input = fromInput.value;
    const result = await fetch(
      `https://v6.exchangerate-api.com/v6/ff43dc8de70f112322225d2a/latest/${fromValue}`,
      { mode: "cors" }
    );
    const data = await result.json();

    rates = data.conversion_rates;
    toInput.value = Math.round(input * rates[currencyTo.value] * 100) / 100;
    currencyRate.innerText = `1.00 ${fromValue} = ${rates[
      currencyTo.value
    ].toFixed(4)} ${toValue}`;
  } catch (error) {
    alert(error);
  }
}
// wersja bez async/await
// const calculate = () => {

//     fetch(`https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
//         .then(res => res.json())
//         .then(data => {

//          const fromValue = currencyFrom.value;
//          const toValue = currencyTo.value;

//             const rate = data.rates[currency2];
//             rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
//             amountTwo.value = (amountOne.value * rate).toFixed(2)
//         })
// }
const exchangeFunction = () => {
  const temp = currencyFrom.value;
  currencyFrom.value = currencyTo.value;
  currencyTo.value = temp;

  calculate();
};

setOptions();

fromInput.addEventListener("input", calculate);
currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);

iconExchange.addEventListener("click", exchangeFunction);

calculate();
