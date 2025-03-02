async function checkFileForComments() {
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
    const match = text.match(/text\s*=\s*["'](.*?)["']/);

    if (match && match[1]) {
      document.body.innerHTML += `<!-- ${match[1]} -->`;
    } else {
      document.body.innerHTML += '<!-- Comment cannot load -->';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while trying to load the comment. Try refreshing.</p>';
  }
}

checkFileForComments();
