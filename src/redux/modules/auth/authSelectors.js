import { emptyMap } from '../../../utils';
import MODULE_NAME from './authConstants';

export const getUser = state => state.getIn([`${MODULE_NAME}`, 'user'], emptyMap);
export const isAuthenticating = state => state.getIn([`${MODULE_NAME}`, 'isAuthenticating'], true);
export const isAuthenticated = state => state.getIn([`${MODULE_NAME}`, 'isAuthenticated'], false);
