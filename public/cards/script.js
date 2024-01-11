// // create a counter

// // Get all the increment and decrement buttons and the count displays
// const decrementButtons = document.querySelectorAll('.decrement');
// const incrementButtons = document.querySelectorAll('.increment');
// const countDisplays = document.querySelectorAll('.count');
// const cartTotal = document.getElementById('cart-total');

// let itemCount = 0;

// // Add event listeners to all the increment and decrement buttons
// decrementButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         if (itemCount > 0) {
//             itemCount--;
//             countDisplays[index].textContent = itemCount;
//             updateCartTotal();
//         }
//     });
// });

// incrementButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         itemCount++;
//         countDisplays[index].textContent = itemCount;
//         updateCartTotal();
//     });
// });

// function updateCartTotal() {
//     cartTotal.textContent = itemCount;
// }

const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const countDisplays = document.querySelectorAll('.count');
const cartTotal = document.getElementById('cart-total');

let totalItemCount = 0;

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (totalItemCount > 0 && parseInt(countDisplays[index].textContent) > 0) {
            totalItemCount--;
            countDisplays[index].textContent = parseInt(countDisplays[index].textContent) - 1;
            updateCartTotal();
        }
    });
});

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        totalItemCount++;
        countDisplays[index].textContent = parseInt(countDisplays[index].textContent) + 1;
        updateCartTotal();
    });
});

function updateCartTotal() {
    cartTotal.textContent = totalItemCount;
}
    