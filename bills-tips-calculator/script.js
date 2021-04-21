const count=document.querySelector('.count')
const cost=document.querySelector('.cost');
const error=document.querySelector('.error');
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const costInfo = document.querySelector('.cost-info');



const countBill=()=>{
    if(people.value=='' || price.value=='' || tip.value==0){
        error.textContent="Uzupelnij wszystkie pola!";
        costInfo.style.display='none';
    }
    else{
        error.textContent='';
        const newPrice = parseFloat(price.value);
        const newPeople = parseInt(people.value);
        const newTip = parseFloat(tip.value);
        const sum = (newPrice + (newPrice * newTip)) / newPeople;

        costInfo.style.display = 'block';
        cost.textContent = sum.toFixed(2);

    }
}


count.addEventListener('click',countBill);
