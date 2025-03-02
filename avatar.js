const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__start input[type="file"]');
const preview = document.querySelector('.setup-user-pic');

preview.style.height = 'auto';
preview.style.width = '600px';

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
