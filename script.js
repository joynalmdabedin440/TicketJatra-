const seats = document.getElementsByClassName('select-seat')

const applyButton = document.getElementById('apply-discount');
const discountInput = document.getElementById('coupon-code');
const phoneNumberInput = document.getElementById('phone-number');
const successBtn = document.getElementById('success-btn');


let seatNumber = 0;
let grandTotal = 0;


for (const seat of seats) {

    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            return;
        }

        seat.classList.add('bg-green-600', 'selected')

        // selected seats

        seatNumber += 1
        if (seatNumber > 4) {

            seat.disabled = true;
            return
        }

        if (seatNumber === 4) {
            applyButton.removeAttribute('disabled')
        }
        setElementByItsId('seat-number', seatNumber)

        // decrement seats  left
        const totalSeatNumberText = getElementByItsId('total-seats').innerText;
        const totalSeatNumber = parseInt(totalSeatNumberText) - 1
        setElementByItsId('total-seats', totalSeatNumber)

        // add seat name ,type and price dynamically
        const typeOfSeat = getElementByItsId('selected-seat')
        typeOfSeat.innerHTML += `
      <div class="my-2 flex justify-between" >
        <p>${seat.innerText}</p>
        <p>Economic</p>
        <p>550</p>
       </div>`


        // calculate total price
        const totalPriceText = getElementByItsId('total-price').innerText
        const totalPrice = parseInt(totalPriceText) + 550
        setElementByItsId('total-price', totalPrice)


        // calculate grandtotal  price


        grandTotal += 550
        setElementByItsId('grand-total', grandTotal)

        


    });


}



applyButton.addEventListener('click', () => {
    const discountCode = discountInput.value;
    let discount = 0;



    if (discountCode === 'NEW15') {
        discount = 0.15 * grandTotal; // 15% discount
    } else if (discountCode === 'Couple20') {
        discount = 0.20 * grandTotal; // 20% discount
    } else {
        alert('Invalid discount code');
        return; // Exit the function if invalid code
    }

    // Apply discount to grand total
    const discountedTotal = grandTotal - discount;
    setElementByItsId('grand-total', discountedTotal.toFixed(2)); // Update grand total

    // Disable the Apply button after discount is applied
    applyButton.disabled = true;
    discountInput.value = ''; // Clear input field
});


//enable next button
phoneNumberInput.addEventListener('blur',(event)=>{
    
    if (event.target.value > 0 && seatNumber > 0) {
         successBtn.removeAttribute('disabled')

    }
})

document.getElementById('continue-btn').addEventListener('click', () => {
    const modal = document.getElementById('my_modal_2');
    modal.close(); // This will close the modal
});
















