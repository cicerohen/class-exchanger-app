import { ref, auth } from './index';
import { pathTypes } from './_constants';
import paths from './_paths';

export const checkIfAuthUserExists = async () => {
  const { currentUser } = auth;
  const authUserRef = ref.child(paths[pathTypes.AUTHUSER](currentUser.uid));
  const snap = await authUserRef.once('value');
  return snap.exists();
};

export const checkIfPathExists = async (path) => {
  const snap = await ref.child(path).once('value');
  return snap.exists();
};

export const getPathValue = async (path) => {
  try {
    const snap = await ref.child(path).once('value');
    return snap.val();
  } catch (err) {
    throw new Error('failed to get path value');
  }
};

export const toArrayPath = (pathType) => {
  const path = paths[pathType]();
  return path.split('/').filter(p => p.replace(' ', '').length > 0);
};
