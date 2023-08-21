let total = 0;
let counter = 1;
function handleclickbtn(target) {

    const productName = target.querySelector('.card-body h2').innerText;
    const productPrice = target.querySelector('.card-body span').innerText;


    const getSelectedItem = document.getElementById('selecteditem');
    const orderedList = document.getElementById('orderedList');

    
    const li = document.createElement('li');
    li.innerText = counter + '. ' + productName;
    orderedList.appendChild(li);
    counter++;

    total = parseFloat(total) + parseFloat(productPrice);
    document.getElementById('total').innerText = total.toFixed(2);

    const gettingPurchaseBtn = document.getElementById('Purchase');

    function updatePurchaseButton() {
        if (total > 0) {
            gettingPurchaseBtn.removeAttribute('disabled');
        } else {
            gettingPurchaseBtn.setAttribute('disabled', 'true');
        }

    }
    updatePurchaseButton()
    const gettingapplyBtn = document.getElementById('apply');
    function updateApplyButton() {
        if (total < 200) {
            gettingapplyBtn.setAttribute('disabled', 'true');
        } else {
            gettingapplyBtn.removeAttribute('disabled');
        }
    }
    updateApplyButton();
}

function getting() {
    const gettinginput = document.getElementById('input');
    const gettingvalue = gettinginput.value.trim();
    const ulitmatetotal = total - (total * 0.20);
    if (gettingvalue === 'SELL200') {
        const getdiscount = document.getElementById('discount');
        getdiscount.innerText = ulitmatetotal.toFixed(2)
    }else {
        gettingapplyBtn.setAttribute('disabled', 'true');
    }
    const moneysave = document.getElementById('savemoney');
    const savedAmount = (parseFloat(total.toFixed(2)) - parseFloat(ulitmatetotal.toFixed(2))).toFixed(2);
    moneysave.innerText = savedAmount;
}
function gethomebtn() {
    document.getElementById('total').innerHTML = ''
    document.getElementById('selecteditem').innerHTML = ''
    document.getElementById('orderedList').innerText=''
    document.getElementById('savemoney').innerHTML = ''
    document.getElementById('discount').innerHTML = ''
    document.getElementById('input').value = ''
    document.getElementById('apply').setAttribute('disabled', 'disabled');
    document.getElementById('Purchase').setAttribute('disabled', 'disabled');
}



