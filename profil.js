function toggleMode() {
  document.body.classList.toggle('dark')

  const btn = document.getElementById('modeBtn')

  if (document.body.classList.contains('dark')) {
    btn.innerText = 'Mode Terang'
    localStorage.setItem('mode', 'dark')
  } else {
    btn.innerText = 'Mode Gelap'
    localStorage.setItem('mode', 'light')
  }
}

// Saat halaman dibuka
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark')
  document.getElementById('modeBtn').innerText = 'Mode Terang'
}
const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('.navigation')

hamburger.onclick = () => {
  nav.classList.toggle('active')
}
document.querySelectorAll('.navigation a').forEach(link => {
  link.onclick = () => {
    nav.classList.remove('active')
  }
})
