import db from './db/db';
import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
})
async function connectDb() {
  try {
    await db.authenticate()
  } catch (error) {
    console.log(error)
  }
}

Promise.resolve(connectDb).then(() => {
  console.log('Data base autenticate');
})

