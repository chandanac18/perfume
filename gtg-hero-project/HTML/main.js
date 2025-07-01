document.addEventListener('DOMContentLoaded', () => {
  // 🖼️ Thumbnail click
  document.querySelectorAll('.thumbnails img').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      document.getElementById('mainImage').src = thumbnail.dataset.image;
    });
  });

  // 🛒 Add to Cart logic
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const fragrance = document.querySelector('input[name="fragrance"]:checked').value;
      const plan = document.querySelector('input[name="plan"]:checked').value;
      document.getElementById('addToCart').href = `cart/${plan}-${fragrance}`;
    });
  });

  // 🧭 Carousel
  const carousel = document.getElementById('carousel');
  const totalCards = document.querySelectorAll('.card').length;
  let currentIndex = 0;

  window.moveSlide = function(direction) {
    const visibleCards = window.innerWidth <= 768 ? 1 : 3;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - visibleCards) currentIndex = totalCards - visibleCards;
    const cardWidth = carousel.children[0].offsetWidth + 20;
    carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  };

  // ❓ FAQ Toggle
  window.toggleAnswer = function(id) {
    const answer = document.getElementById('answer' + id);
    answer.classList.toggle('open');
  };

  // 📩 Subscription form
  const form = document.getElementById("subscribeForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("emailInput").value;
      if (email) {
        document.getElementById("confirmationMessage").style.display = "block";
        form.reset();
      }
    });
  }

  // 🔁 Double Subscription button
  const redirectBtn = document.querySelector('.Subscription');
  if (redirectBtn) {
    console.log('Button found ✅');
    redirectBtn.addEventListener('click', () => {
      console.log('Button clicked 🎯');
      window.location.href = 'Subscription.html'; // Change the file path if needed
    });
  } else {
    console.log('Button NOT found ❌');
  }

}); // ← ✅ This was missing!
