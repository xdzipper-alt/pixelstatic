function displayImageFromPxtr() {
  fetch('content.pxtr')
    .then(response => response.text())
    .then(text => {
      const displayLine = text.split('\n').find(line => line.startsWith('image = '));

      if (displayLine) {
        let imageUrl = displayLine.substring('image = '.length).trim();

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
      } else {
        console.log('No "image = https://example.com/image.png" line found in content.pxtr');
      }
    })
    .catch(error => console.error('Error fetching image from content.pxtr:', error));
}

displayImageFromPxtr();
