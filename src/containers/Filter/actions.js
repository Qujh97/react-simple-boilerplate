const prefix = 'FILTER';

export const CHANGE = `${prefix}_CHANGE`;

export const change = status => ({
  type: CHANGE,
  status
});
