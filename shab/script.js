document.getElementById('surpriseBtn').addEventListener('click', function() {
  document.getElementById('surpriseMessage').classList.toggle('hidden');
  createHearts();
});

function createHearts() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      container.appendChild(heart);
  }
}

