function checkForUnderline() {
  fetch('content.pxtr')
    .then(response => response.text())
    .then(text => {
      if (text.includes('underline')) {
        const htmlToInsert = '<hr>';
        document.body.innerHTML += htmlToInsert;
      } else {
        console.log('"underline" not found in content.pxtr');
      }
    })
    .catch(error => console.error('Error fetching content.pxtr:', error));
}

checkForUnderline();
