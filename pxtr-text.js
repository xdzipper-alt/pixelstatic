async function checkFileForText() {
  try {
    const response = await fetch('content.pxtr');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    const match = text.match(/text = ([\w\s]+)/); 

    if (match && match[1]) {
      document.body.innerHTML += `<p>${match[1]}</p>`;
    } else {
      document.body.innerHTML += '<p> </p>';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while trying to load the text. Try refreshing.</p>';
  }
}

checkFileForText();
