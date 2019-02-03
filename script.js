

function submit(product, payment) {
    
    reset()

    if (product === undefined || product === '') {
        document.getElementById('blankProduct').innerHTML = 'Please choose your product'
    }

    if (payment === undefined || payment === '') {
        document.getElementById('blankPayment').innerHTML = 'Please select your payment mode'
    }

    if ((product !== undefined && product !== '') && (payment !== undefined && payment !== '')) {
        document.getElementById('bill').innerHTML = 'You choose to buy ' + product + ' and your payment is using ' + payment
    }
}

function reset() {
    var resultProduct = document.getElementById('blankProduct')
    var resultPayment = document.getElementById('blankPayment')
    var resultBill = document.getElementById('bill')

    if (resultProduct.innerHTML !== '')
        resultProduct.innerHTML = ''

    if (resultPayment.innerHTML !== '')
        resultPayment.innerHTML = ''

    if (resultBill.innerHTML !== '')
        resultBill.innerHTML = ''
}