import { pathTypes } from './_constants';

export default {
  [pathTypes.AUTHUSERS]: 'authUsers',
  [pathTypes.AUTHUSER]: authUserId => `authUsers/${authUserId}`,
  [pathTypes.AUTHUSER_USERNAME]: authUserId => `authUsers/${authUserId}/username`,
  [pathTypes.AUTHUSER_EMAIL]: authUserId => `authUsers/${authUserId}/email`,
  [pathTypes.AUTHUSER_DISPLAYNAME]: authUserId => `authUsers/${authUserId}/displayName`,

  [pathTypes.USERS]: () => 'users',
  [pathTypes.USER]: userId => `users/${userId}`,
  [pathTypes.USER_USERNAME]: userId => `users/${userId}/username`,
  [pathTypes.USER_DISPLAYNAME]: userId => `users/${userId}/displayName`,
  [pathTypes.USER_EMAIL]: userId => `users/${userId}/email`,

  [pathTypes.USER_PUBLICINFO_USERNAME]: userId => `users/${userId}/publicInfo/username`,
  [pathTypes.USER_PUBLICINFO_DISPLAYNAME]: userId => `users/${userId}/publicInfo/displayName`,
  [pathTypes.USER_PUBLICINFO_EMAIL]: userId => `users/${userId}/publicInfo/email`,

  [pathTypes.EXCHANGES]: () => 'exchanges',
  [pathTypes.EXCHANGE]: exchangeId => `exchanges/${exchangeId}`,
};
