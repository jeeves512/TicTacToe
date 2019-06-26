const X_IMAGE_URL = 'images/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function changeToX(event) {
  console.log('hello');
  const container = event.currentTarget;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);
}

const boxes = document.querySelectorAll('#board div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
}
