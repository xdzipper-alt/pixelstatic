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

    const match = text.match(/text\s*=\s*["'](.*?)["']/);

    if (match && match[1]) {
      let extractedText = match[1];
      if (extractedText.includes(' bold ')) {
        extractedText = extractedText.replace(' bold ', '');
        document.body.innerHTML += `<p><b>${extractedText}</b></p>`;
      } else {
        document.body.innerHTML += `<p>${extractedText}</p>`;
      }
    } else {
      document.body.innerHTML += '<p></p>';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while trying to load the text. Try refreshing.</p>';
  }
}

checkFileForBoldText();
