const seats = document.getElementsByClassName('select-seat')


for (const seat of seats) {
    
    seat.addEventListener('click', () => { 
        if (seat.classList.contains('selected')) {
            return;
        }

        seat.classList.add('bg-green-600', 'selected')
        
        // selected seats
        const seatNumberText = getElementByItsId('seat-number')

        const seatNumber = parseInt(seatNumberText) + 1 
        if (seatNumber > 4) {
            
            seat.disabled = true;
            return
        }

        setElementByItsId('seat-number', seatNumber)

        // decrement seats  left

        const totalSeatNumberText = getElementByItsId('total-seats')
        const totalSeatNumber = parseInt(totalSeatNumberText) - 1
        setElementByItsId('total-seats',totalSeatNumber)



        
        
        

        
        
    } );

}

