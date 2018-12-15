import { pathTypes, toArrayPath } from '../../../firebase';
import { emptyMap } from '../../../utils';
import MODULE_NAME from './firebaseConstants';

export const getAllExchanges = state => state.getIn([`${MODULE_NAME}`, 'paths', ...toArrayPath(pathTypes.EXCHANGES)], emptyMap);
