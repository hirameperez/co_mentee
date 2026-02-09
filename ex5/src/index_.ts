import type {Application} from 'express'
const app: Application = require('./app')

const PORT = process.env.PORT || 3100;

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
});