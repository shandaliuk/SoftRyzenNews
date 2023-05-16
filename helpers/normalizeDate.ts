import format from 'date-fns/format';

export const normalizeDate = (date: Date): string =>
  format(date, 'MMM dd, yyyy');
