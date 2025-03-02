
//Функция генерации случайного числа

const getRandomIntInclusive = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  if (maxRound <= minRound || minRound < 0 || maxRound < 0 || typeof minRound !== 'number' || typeof maxRound !== 'number') {
    return NaN;
  } else { return Math.floor(Math.random() * ((maxRound - minRound + 1)) + minRound); }
};
getRandomIntInclusive();

//Функция генерации случайного элемента

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape'; //проверка нажатой клавиши escape

export {getRandomArrayElement,getRandomIntInclusive,isEscapeKey};

//Функция для проверки максимальной длинны строки

function checkMaxStringLength(verifiedString, maxLength) {

  if (verifiedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
checkMaxStringLength ('',50);

