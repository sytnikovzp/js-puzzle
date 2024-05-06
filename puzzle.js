'use strict';

const dragstart = function (event) {
  event.dataTransfer.setData('text', event.target.id);
};

const dragover = function (event) {
  if (event.target.nodeName.toLowerCase() === 'img') {
    return true;
  }
  event.preventDefault();
};

const drop = function (event) {
  event.preventDefault();
  const imageId = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(imageId));
};

const cells = document.getElementsByClassName('col');
Array.from(cells).forEach((element) => {
  element.addEventListener('dragover', dragover);
  element.addEventListener('drop', drop);
});

const images = document.getElementsByTagName('img');
Array.from(images).forEach((element) => {
  element.addEventListener('dragstart', dragstart);
});
