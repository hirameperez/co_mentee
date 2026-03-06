import db from './db/db';

async function connectDb() {
  try {
    await db.authenticate();
  } catch (error) {
    console.error(error);
  }

}

Promise.resolve(connectDb()).then(() => {
  console.log('Data base authenticated');
});