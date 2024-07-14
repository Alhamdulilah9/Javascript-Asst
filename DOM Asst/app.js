document.addEventListener('DOMContentLoaded', () => {
  const cart = document.getElementById('cart');
  const totalPriceElement = document.getElementById('total-price');

  function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll('.item').forEach(item => {
          const price = parseFloat(item.querySelector('.price').dataset.price);
          const quantity = parseInt(item.querySelector('.quantity-number').textContent);
          totalPrice += price * quantity;
      });
      totalPriceElement.textContent = `${totalPrice}$`;
  }

  cart.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('plus')) {
          const quantityElement = target.closest('.quantity').querySelector('.quantity-number');
          quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
          updateTotalPrice();
      }

      if (target.classList.contains('minus')) {
          const quantityElement = target.closest('.quantity').querySelector('.quantity-number');
          if (parseInt(quantityElement.textContent) > 1) {
              quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
              updateTotalPrice();
          }
      }

      if (target.classList.contains('delete')) {
          target.closest('.item').remove();
          updateTotalPrice();
      }

      if (target.classList.contains('like')) {
          target.classList.toggle('liked');
      }
  });

  updateTotalPrice();
});
