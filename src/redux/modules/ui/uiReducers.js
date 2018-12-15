import { asImmutable } from '../../../utils';
import * as actions from './uiActions';

const initialState = asImmutable({
    sidebarIsOpen: false,
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.OPEN_SIDEBAR:
        return state.setIn(['sidebarIsOpen'], true);
    case actions.CLOSE_SIDEBAR:
        return state.setIn(['sidebarIsOpen'], false);
    default:
        return state;
    }
};
