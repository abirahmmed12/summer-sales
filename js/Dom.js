let total = 0
function handleclickbtn(target) {
    
    const productName = target.querySelector('.card-body h2').innerText;
    const productPrice = target.querySelector('.card-body span').innerText
    
    

    
    const getselectedItem = document.getElementById('selecteditem')
    const li =document.createElement('li')
    li.innerText= productName
    getselectedItem.appendChild(li)
  total = parseFloat(total)+ parseFloat(productPrice)
  document.getElementById('total').innerText=total

  const gettingPurchaseBtn = document.getElementById('Purchase');

  // Function to update the Purchase button's state
  function updatePurchaseButton() {
      if (total > 0) {
          gettingPurchaseBtn.removeAttribute('disabled');
      } else {
          gettingPurchaseBtn.setAttribute('disabled', 'true');
      }
      
  }
  updatePurchaseButton()
  const gettingapplyBtn = document.getElementById('apply');

  // Function to update the Apply button's state
  function updateApplyButton() {
      if (total <= 200 ) {
          gettingapplyBtn.setAttribute('disabled', 'true');
      } else {
          gettingapplyBtn.removeAttribute('disabled');
      }
  }

  updateApplyButton(); 



  


}

function getting() {
    const gettinginput = document.getElementById('input');
    const gettingvalue = gettinginput.value;
    const ulitmatetotal = total - (total * 0.20)

    if (gettingvalue === 'SELL200') {
        const getdiscount = document.getElementById('discount');
        getdiscount.innerText = ulitmatetotal.toFixed(2)
    }
    const moneysave = document.getElementById('savemoney');
    const savedAmount = (parseFloat(total.toFixed(2)) - parseFloat(ulitmatetotal.toFixed(2))).toFixed(2);
    moneysave.innerText = savedAmount;
}


 

       