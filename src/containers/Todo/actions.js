const prefix = 'TODO';

export const ADD = `${prefix}_ADD`;
export const TOGGLE = `${prefix}_TOGGLE`;
export const REMOVE = `${prefix}_REMOVE`;

export const add = item => ({
  type: ADD,
  item
});
export const toggle = id => ({
  type: TOGGLE,
  id
});
export const remove = id => ({
  type: REMOVE,
  id
});
