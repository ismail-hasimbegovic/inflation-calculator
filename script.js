function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);

    // Formula za izracunavanje inflacije
    let worth = money + (money * (inflationRate / 100));

    for (let i=1 ; i<years; i++) {
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);

    let newELement = document.createElement('div');
    newELement.className = 'new-value';
    newELement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth} € za ${years} godina.` ;

    document.querySelector('.container').appendChild(newELement);
}