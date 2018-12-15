import { createReduxStore } from '../../redux';

export const createReduxTestStore = ({
  configs = {},
} = {}) => {
  const storeActions = [];
  const expectedActions = [];
  
  const actionMiddleware = () => next => (action) => {
    storeActions.push(action);
    return next(action);
  };

  const middlewares = configs.middlewares || [];
  middlewares.splice(0, 0, actionMiddleware);

  const store = createReduxStore({ middlewares, ...configs });
  
  store.select = (selector) => selector(store.getState());

  store.when = (actionType, assertion = () => {}) => {
    expectedActions.push({
      type: actionType,
      isDispatched: false,
      assertion,
    });
  };
  
  store.subscribe(() => {
    const lastActions = [].concat(storeActions[storeActions.length - 1]);
    const state = store.getState();
    lastActions.forEach((lastAction) => {
      expectedActions.forEach((expectedAction) => {
        if (expectedAction.type === lastAction.type) {
          expectedAction.isDispatched = true;
          expectedAction.assertion({
            state,
            action: lastAction
          });
        }
      });
    });
  });

  return store;
  
};
