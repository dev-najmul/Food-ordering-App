//get element
const msgAl = document.querySelector('.msgAl');
const msgTot = document.querySelector('.msgTot');
const msg = document.querySelector('.msg');
const fd = document.querySelector('.fd');
const fdParent = document.querySelector('#fdParent');
const submit = document.getElementById('submit');

//get input checkbox value

const foods = document.querySelectorAll('input[name = "food"]');


foods.forEach( item => {

    item.onchange = () => {
        const selectFoods = document.querySelectorAll('input[name = "food"]:checked');

        let allFoods = [];
        let total = 0;
        selectFoods.forEach( fItem => {
            allFoods.push(fItem.value);
            total += Number( fItem.getAttribute('price') );
        });
        if (allFoods == '') {
            msgTot.parentElement.style.display = 'none';
        }else {
            msgTot.parentElement.style.display = 'block';
            msgTot.innerHTML = setAlert(`You total cost will be = ${total} Taka.`,'info');
        }

        if (allFoods == '') {
            fdParent.style.display = 'none';
        }else {
            fdParent.style.display = 'block';
            fd.innerHTML = `<b>${allFoods.join(`.<br>`)}.</b>`;
        }

        submit.onclick = () => {
            msg.innerHTML = setAlert(`<span>You orderd ${`<b>${allFoods.join(`.<br>`)}.</b>`}, Your Bill is = <b>${total} Taka.</b> Please wait for this</span>`,'success');
           
       }
    }


    
});

if(fd.innerHTML == '') {
    submit.onclick = () =>{
        msgAl.innerHTML = setAlert('select food');
    }
}