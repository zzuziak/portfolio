
function SmoothScroll() {
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');

  document.getElementById('link-about').addEventListener('click', event => {
    about.scrollIntoView({
      behavior: 'smooth'
    })});
  document.getElementById('link-projects').addEventListener('click', event => {
    projects.scrollIntoView({
      behavior: 'smooth'
    })});
  document.getElementById('link-contact').addEventListener('click', event => {
    contact.scrollIntoView({
      behavior: 'smooth'
    })});
  };

SmoothScroll();
