async function checkFileForTitle() {
  try {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    const fileUrl = `${baseUrl}/content.pxtr`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    // Modified regex to match title = "..." or title = '...'
    const match = text.match(/title\s*=\s*["'](.*?)["']/);

    if (match && match[1]) {
      document.title = match[1];
    } else {
      document.title = 'null';
    }
  } catch (error) {
    console.error('Error:', error);
    document.title = 'An error occurred';
  }
}

checkFileForTitle();
