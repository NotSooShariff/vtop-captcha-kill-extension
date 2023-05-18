// Check if the page contains an element with id 'rc-imageselect'
function checkAndAddButton() {
  var element = document.getElementById('rc-imageselect');
  if (element) {
    addButton();
  }
}

// Add the 'Remove this image captcha' button to the page
function addButton() {
  var button = document.createElement('button');
  button.innerText = 'Remove this image captcha';
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.left = '50%';
  button.style.transform = 'translateX(-50%)';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.fontWeight = 'bold';
  button.addEventListener('click', reloadPage);
  document.body.appendChild(button);
}

// Reload the page when the button is clicked
function reloadPage() {
  location.reload();
}

// Run the checkAndAddButton function when the page is loaded
document.addEventListener('DOMContentLoaded', checkAndAddButton);
