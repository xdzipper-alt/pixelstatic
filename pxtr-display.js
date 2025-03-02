function displayImageFromPxtr() {
  fetch('content.pxtr')
    .then(response => response.text())
    .then(text => {
      const displayLine = text.split('\n').find(line => line.startsWith('display = '));

      if (displayLine) {
        const imageUrl = displayLine.substring('display = '.length);
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
      } else {
        console.log('No "display = https://example.com/image.png" line found in content.pxtr');
      }
    })
    .catch(error => console.error('Error fetching image from content.pxtr:', error));
}

displayImageFromPxtr();
