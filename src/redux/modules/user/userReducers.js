import { asImmutable } from '../../../utils';
// import * as constants from './userConstants';
// import * as actions from './userActions';

const initialState = asImmutable({});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
