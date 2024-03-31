// ENTRY POINT OF OUR APPLICATION
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

/* console.log(app.get('env')); 
CHECKING THE ENV IN WHICH WE ARE WORKING
*/
