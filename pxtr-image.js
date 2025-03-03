function displayImageFromPxtr() {
  fetch('content.pxtr')
    .then(response => response.text())
    .then(text => {
      const displayLine = text.split('\n').find(line => line.startsWith('image = '));

      if (displayLine) {
        let imageUrl = displayLine.substring('image = '.length).trim();

        // Remove quotes if present
        if (imageUrl.startsWith('"') && imageUrl.endsWith('"')) {
          imageUrl = imageUrl.slice(1, -1);
        } else if (imageUrl.startsWith("'") && imageUrl.endsWith("'")) {
          imageUrl = imageUrl.slice(1, -1);
        }

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
