async function checkFileForBoldText() {
  try {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    const fileUrl = `${baseUrl}/content.pxtr`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    // Modified regex to match text = "..." or text = '...'
    const match = text.match(/b-text\s*=\s*["'](.*?)["']/);

    if (match && match[1]) {
      document.body.innerHTML += `<p><strong>${match[1]}</strong></p>`;
    } else {
      document.body.innerHTML += '<p></p>';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while trying to load the bold text. Try refreshing.</p>';
  }
}

checkFileForBoldText();
