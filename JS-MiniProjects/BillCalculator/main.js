const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');
const button = document.querySelector('button');
const billCosts = document.querySelector('#billCosts');
const tipCosts = document.querySelector('#tipCosts');
const allCosts = document.querySelector('#allCosts');
const result = document.querySelector('.showResult');
const main = document.querySelector('.formElements');
let flag = false;

const showBill = () => {
    if(price.value == '' || people.value == '' || tip.value == ''){
        error.textContent = 'Fill all fields!';
        costInfo.style.display = 'none'; 
    }else{
        error.textContent = '';
        countBill();
    }
}

const countBill = () => {
    if(flag == false){
    main.style.display = 'none';
    result.style.display = 'block';
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const tipResult = newPrice*newTip;
    const sumBill = newPrice + (newPrice*newTip);
    const endResult = (newPrice + (newPrice*newTip))/newPeople;

    billCosts.value = newPrice.toFixed(2);
    tipCosts.value = tipResult.toFixed(2);
    allCosts.value = sumBill.toFixed(2);
    cost.textContent = endResult.toFixed(2);
    costInfo.style.display = 'block';


    countBtn.textContent = 'Caunt again!';
    flag = true;
    }else{
        countBtn.addEventListener('click', location.reload());
        flag = false;
    }
}
countBtn.addEventListener('click', showBill);