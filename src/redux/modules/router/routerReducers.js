import { asImmutable } from '../../../utils';
import * as actions from './routerActions';

const initialState = asImmutable({
    current: {
        pathname: '/',
    },
    previous: {
        pathname: '/',
    },
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.ROUTE_CHANGED:
        return state.merge(asImmutable({
            previous: state.get('current'),
            current: action.payload,
        }));
    default:
        return state;
    }
};
