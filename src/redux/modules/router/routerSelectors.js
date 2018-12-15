import MODULE_NAME from './routerConstants';
import { emptyMap } from '../../../utils';

export const getPreviousRoute = state => state.getIn([`${MODULE_NAME}`, 'previous'], emptyMap);
export const getCurrentRoute = state => state.getIn([`${MODULE_NAME}`, 'current'], emptyMap);
