const toggleSwitch = document.querySelector('.toggle-switch');
const root = document.documentElement;

toggleSwitch.addEventListener('click', function() {
  root.classList.toggle('dark-mode');

  // Store the user's preference in localStorage
  if (root.classList.contains('dark-mode')) {
    localStorage.setItem('darkModeEnabled', true);
  } else {
    localStorage.setItem('darkModeEnabled', false);
  }
});

// Check the user's preference on page load and apply it
const darkModeEnabled = localStorage.getItem('darkModeEnabled');
if (darkModeEnabled === 'true') {
  root.classList.add('dark-mode');
}
