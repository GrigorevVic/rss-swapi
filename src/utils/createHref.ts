import { People } from '../types/types';

export const createHref = (data: People[]): string => {
  if (!data.length) return '';

  const content: string[] = [];

  const tableHeader = Object.keys(data[0]).join(';');
  content.push(tableHeader);

  data.forEach((obj) => {
    const values = Object.values(obj).map((element) => {
      if (typeof element === 'object') {
        return element === null ? 'No info' : Object.values(element)[1];
      }
      return element;
    });

    content.push(values.join(';'));
  });

  return encodeURI(`data:text/csv;charset=utf-8,${content.join('\n')}`);
};
