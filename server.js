// ENTRY POINT OF OUR APPLICATION
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successfull'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// console.log(process.env);
/* console.log(app.get('env')); 
CHECKING THE ENV IN WHICH WE ARE WORKING
*/
