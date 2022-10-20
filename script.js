
const listeners = (() => {
// Header nav button scroll functionality
const topBtn = document.querySelector('#top-btn');
topBtn.addEventListener('click', () => {
  document.getElementById("main").scrollIntoView({behavior: 'smooth'})});

const projectsBtn = document.querySelector('#projects-btn');
projectsBtn.addEventListener('click', () => {
  document.getElementById("projects").scrollIntoView({behavior: 'smooth'})});

const bioBtn = document.querySelector('#bio-btn');
bioBtn.addEventListener('click', () => {
  document.getElementById("bio").scrollIntoView({behavior: 'smooth', block: 'center'})});

const linksBtn = document.querySelector('#links-btn');
linksBtn.addEventListener('click', () => {
  document.getElementById("links").scrollIntoView({behavior: 'smooth', block: 'center'})});

const contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', () => {
  document.getElementById("contact").scrollIntoView({behavior: 'smooth', block: 'center'})});

// Parallax scroll effect
const background = document.querySelector('#background');
const parallax = () => {
  const { scrollY } = window;
  background.style.top = (scrollY * -.4) + 'px';
}
window.addEventListener('scroll', parallax);

// Card modals
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  modal.addEventListener('mouseenter', toggleHidden);
  modal.addEventListener('mouseleave', toggleHidden);  
});
})();

function toggleHidden(e) {
  console.log(e.target);
  e.target.classList.toggle('hidden');
}


