function injectCSS(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);
}

// Example usage:
const combinedCSS = `
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');

body {
    font-family: 'Lexend', sans-serif;
    margin: 0;
    padding: 0;
}

hr {
    background-color: #000000;
    height: 3px;
    border: none;
}
`;

injectCSS(combinedCSS);
