export const MOVE_TO_TOP = 'MOVE_TO_TOP';
export const MOVE_DOWN = 'MOVE_DOWN';

export const moveToTop = (name) => ({
  type: MOVE_TO_TOP,
  payload: {
    name
  }
});

export const moveDown = (name) => ({
  type: MOVE_DOWN,
  payload: {
    name
  }
});
