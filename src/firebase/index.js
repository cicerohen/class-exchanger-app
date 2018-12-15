import firebase from 'firebase';

export * from './_constants';
export { default as paths } from './_paths';
export { default as updates } from './_updates';
export * from './_helpers';

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
};

export const app = firebase.initializeApp(config);
export const database = app.database();
export const auth = app.auth();
export const ref = database.ref();

export const createId = path => ref.child(path).push().key;
