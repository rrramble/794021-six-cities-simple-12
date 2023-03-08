import { RATING_TO_PERCENT_STEP } from 'src/utils/consts';

export function getPercentFromRating(rating: number): string {
  const roundedPercent = Math.round(rating) * RATING_TO_PERCENT_STEP;
  if (roundedPercent > 100) {
    return '100%';
  }
  if (roundedPercent < 0) {
    return '0%';
  }
  return `${roundedPercent}%`;
}

export function capitalizeFirstLetter(text: string): string {
  const head = text.charAt(0);
  const tail = text.slice(1);
  return head.toUpperCase() + tail;
}

export function getMultipleOfPlaceWord(count: number): string {
  if (count === 1 || count === -1) {
    return 'place';
  }
  return 'places';
}

export function parseInteger(numberAsString = ''): number | typeof NaN {
  const number = Number(numberAsString);
  if (isNaN(number)) {
    return NaN;
  }
  const numberInt = parseInt(numberAsString, 10);
  if (number !== numberInt) {
    return NaN;
  }
  return numberInt;
}

export function makeHash(obj: object): string {
  return JSON.stringify(obj);
}
