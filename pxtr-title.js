async function checkFileForTitle() {
  try {
    const response = await fetch('content.pxtr');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    const match = text.match(/title = ([\w\s]+)/);

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
