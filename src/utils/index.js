import { Iterable, fromJS } from 'immutable';
import { createBrowserHistory } from 'history';

export const asImmutable = obj => (Iterable.isIterable(obj) ? obj : fromJS(obj));
export const emptyMap = asImmutable({});

export const buildActions = (moduleName, prefix, suffix) => ({
    REQUESTED: `${moduleName}/${prefix}_${suffix || ''}${suffix ? '_' : ''}REQUESTED`,
    STARTED: `${moduleName}/${prefix}_${suffix || ''}${suffix ? '_' : ''}STARTED`,
    SUCCEEDED: `${moduleName}/${prefix}_${suffix || ''}${suffix ? '_' : ''}SUCCEEDED`,
    FAILED: `${moduleName}/${prefix}_${suffix || ''}${suffix ? '_' : ''}FAILED`,
    FULFILLED: `${moduleName}/${prefix}_${suffix || ''}${suffix ? '_' : ''}FULFILLED`,
});

export const toArrayPath = path => path.split('/').filter(p => p.replace(' ', '').length > 0);

export const getHistory = () => {
    window.browserHistory = window.browserHistory || createBrowserHistory();
    return window.browserHistory;
};

export const isDevEnv = () => {
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv !== 'production' && nodeEnv !== 'test';
};
