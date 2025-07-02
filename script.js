// Lightweight MKWEB OS 7 Dashboard Script

// --- Uhrzeit & Datum ---
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}
updateTime();
setInterval(updateTime, 10000);

// --- Suchmaschinen Auswahl und Suche ---
document.querySelectorAll('.search-engine').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.search-engine').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('search').focus();
  });
});

document.querySelector('.search-box').addEventListener('submit', function (e) {
  e.preventDefault();
  const q = document.getElementById('search').value.trim();
  if (!q) return;
  const engine = document.querySelector('.search-engine.active').getAttribute('data-engine');
  let url = '';
  switch (engine) {
    case 'google': url = 'https://www.google.com/search?q=' + encodeURIComponent(q); break;
    case 'yandex': url = 'https://yandex.com/search/?text=' + encodeURIComponent(q); break;
    case 'bing': url = 'https://www.bing.com/search?q=' + encodeURIComponent(q); break;
    case 'duckduckgo': url = 'https://duckduckgo.com/?q=' + encodeURIComponent(q); break;
    case 'youtube': url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q); break;
    case 'github': url = 'https://github.com/search?q=' + encodeURIComponent(q); break;
    default: url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  }
  window.open(url, '_blank');
});

// --- Zitat (statisch/random) ---
const quotes = [
  { text: "Eleganz ist die Balance von Proportion, Emotion und Überraschung.", author: "Valentino Garavani" },
  { text: "Die Zukunft gehört denen, die an die Schönheit ihrer Träume glauben.", author: "Eleanor Roosevelt" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Weniger ist mehr.", author: "Ludwig Mies van der Rohe" }
];
function showRandomQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = q.text;
  document.getElementById('quote-author').textContent = q.author;
}
showRandomQuote();

// --- Avatar Toggle ---
document.getElementById('user-avatar-toggle').addEventListener('click', function () {
  const avatar = document.getElementById('user-avatar');
  if (avatar.style.display === 'none') {
    avatar.style.display = '';
    this.textContent = 'Avatar ausblenden';
  } else {
    avatar.style.display = 'none';
    this.textContent = 'Avatar einblenden';
  }
});

// --- Vollbild ---
document.getElementById('fullscreen-btn').addEventListener('click', function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    this.textContent = 'Vollbild verlassen';
  } else {
    document.exitFullscreen();
    this.textContent = 'Vollbild';
  }
});
