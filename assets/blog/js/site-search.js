const f = document.getElementById('search_form');
const q = document.getElementById('search_query');
const google = 'https://www.google.com/search?q=site%3A';
const site = 'home.cse.ust.hk/~zjiangaj';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  window.location.replace(url);
}

if (f != null) { f.addEventListener('submit', submitted); }
