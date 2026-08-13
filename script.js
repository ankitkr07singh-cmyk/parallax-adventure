const layers = [...document.querySelectorAll('.layer')];
const progress = document.querySelector('.progress span');
let targetScroll = scrollY, smoothScroll = scrollY;

function animate() {
  targetScroll = scrollY;
  smoothScroll += (targetScroll - smoothScroll) * 0.09;

  layers.forEach(el => {
    const speed = parseFloat(el.dataset.speed || 0.2);
    const rect = el.closest('.scene')?.getBoundingClientRect();
    if (!rect) return;
    const local = -rect.top;
    const shift = local * speed;
    const rotate = el.classList.contains('comet') ? local * 0.008 : 0;
    el.style.transform = `translate3d(0, ${shift}px, 0) rotate(${rotate}deg)`;
  });

  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max ? scrollY / max : 0})`;
  requestAnimationFrame(animate);
}
animate();

const cursor = document.querySelector('.cursor');
addEventListener('pointermove', e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor?.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor?.classList.remove('big'));
});

const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}
document.querySelectorAll('.discover').forEach(btn => {
  btn.addEventListener('click', () => showToast(btn.dataset.message));
});

document.getElementById('replay').addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  showToast('Journey reset. Ready when you are ✦');
});

const soundBtn = document.getElementById('soundBtn');
let audioContext, oscillator, gain;
let soundOn = false;
soundBtn.addEventListener('click', () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioContext.createOscillator();
    gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 110;
    gain.gain.value = 0;
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
  }
  soundOn = !soundOn;
  gain.gain.value = soundOn ? 0.012 : 0;
  soundBtn.textContent = soundOn ? '◉' : '◌';
});

const navLinks = [...document.querySelectorAll('.nav nav a')];
const sections = [...document.querySelectorAll('section[id]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.style.color =
        a.getAttribute('href') === '#' + entry.target.id ? '#7ee8e2' : '');
    }
  });
}, {threshold: 0.45});
sections.forEach(section => observer.observe(section));
