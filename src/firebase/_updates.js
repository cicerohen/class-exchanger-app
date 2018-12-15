import { pathTypes, updateTypes } from './_constants';
import paths from './_paths';

export default {

  [updateTypes.AUTHUSER_CREATE]: data => ({
    [paths[pathTypes.AUTHUSER](data.userId)]: {
      id: data.userId,
      username: data.payload.username || null,
      displayName: data.payload.displayName || null,
      email: data.payload.email || null,
    },
    [paths[pathTypes.USER](data.userId)]: {
      id: data.userId,
      displayName: data.payload.displayName || null,
    },
  }),

  [updateTypes.AUTHUSER_UPDATE]: (data) => {
    const updates = {};
    if (data.payload.username) {
      updates[paths[pathTypes.USER_USERNAME](data.userId)] = data.payload.username;
    }
    if (data.payload.displayName) {
      updates[paths[pathTypes.USER_DISPLAYNAME](data.userId)] = data.payload.displayName;
    }
    if (data.payload.email) {
      updates[paths[pathTypes.USER_EMAIL](data.userId)] = data.payload.email;
    }
    return updates;
  },

  [updateTypes.USER_USERNAME_UPDATE]: data => ({
    [paths[pathTypes.USER_USERNAME](data.userId)]: data.payload.username,
  }),

  [updateTypes.USER_DISPLAYNAME_UPDDATE]: data => ({
    [paths[pathTypes.USER_DISPLAYNAME](data.userId)]: data.payload.displayName,
  }),

  [updateTypes.USER_EMAIL_UPDATE]: data => ({
    [paths[pathTypes.USER_EMAIL](data.userId)]: data.payload.email,
  }),

  [updateTypes.USER_PUBLICINFO_USERNAME_UPDATE]: data => ({
    [paths[pathTypes.USER_PUBLICINFO_USERNAME](data.userId)]: data.payload,
  }),

  [updateTypes.USER_PUBLICINFO_DISPLAYNAME_UPDATE]: data => ({
    [paths[pathTypes.USER_PUBLICINFO_DISPLAYNAME](data.userId)]: data.payload,
  }),

  [updateTypes.USER_PUBLICINFO_EMAIL_UPDATE]: data => ({
    [paths[pathTypes.USER_PUBLICINFO_EMAIL](data.userId)]: data.payload,
  }),

  [updateTypes.EXCHANGE_CREATE]: data => ({
    [paths[pathTypes.EXCHANGE](data.exchangeId)]: {
      id: data.exchangeId,
      semester: data.payload.semester,
    },
  }),

};
