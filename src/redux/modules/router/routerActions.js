import MODULE_NAME from './routerConstants';

export const ROUTE_CHANGED = `${MODULE_NAME}/ROUTE_CHANGED`;
export const PUSH = `${MODULE_NAME}/PUSH`;
export const REPLACE = `${MODULE_NAME}/REPLACE`;
export const GO = `${MODULE_NAME}/GO`;
export const BACK = `${MODULE_NAME}/BACK`;
export const FORWARD = `${MODULE_NAME}/FORWARD`;

export const routeChange = ({ pathname, search, hash }) => ({
  type: ROUTE_CHANGED,
  payload: {
    pathname,
    search,
    hash,
  },
});

export const push = href => ({
  type: PUSH,
  payload: {
    href,
  },
});

export const replace = href => ({
  type: REPLACE,
  payload: {
    href,
  },
});

export const go = index => ({
  type: GO,
  payload: {
    index,
  },
});

export const back = () => ({
  type: BACK,
});

export const forward = () => ({
  type: FORWARD,
});
