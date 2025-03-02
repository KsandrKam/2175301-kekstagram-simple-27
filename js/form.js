import {isEscapeKey} from './util.js';
import {scaleReset} from './change-img.js';
import {resetEffects} from './slider.js';

const userModalElement = document.querySelector('.img-upload__overlay');

const userOpenModalElement = document.querySelector('#upload-file');

const userCloseModalElement = document.querySelector('#upload-cancel');

const mainElement = document.querySelector('body');

const openUserModal = () => {
  userModalElement.classList.remove('hidden');
  mainElement.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

const closeUserModal = () => {
  scaleReset();
  resetEffects();
  userModalElement.classList.add('hidden');
  mainElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

/*
function checkTypeFile() {
  let file = document.querySelector("#upload-file");
  if ( file.img === true ) { load }
}
*/

function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

userOpenModalElement.addEventListener('change', () => {
  openUserModal();
});

userCloseModalElement.addEventListener('click', () => {
  closeUserModal();
});

export {openUserModal,closeUserModal};
