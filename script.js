const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function copyToClipboard() {
  if (display.value.trim() !== '') {
    navigator.clipboard.writeText(display.value);
    alert('Copied to clipboard!');
  }
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Optional: Enable keyboard input
document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.=';
  if (validKeys.includes(e.key)) {
    if (e.key === '=') calculateResult();
    else appendValue(e.key);
  } else if (e.key === 'Backspace') {
    deleteChar();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});