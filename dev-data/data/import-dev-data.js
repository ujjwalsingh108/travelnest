const fs = require('fs');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const Tour = require('../../models/tourModal');

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

// READ JSON FILE

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

// IMPORT DATA INTO DATABASE

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted successfully!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// LEARN INTERACTING WITH THE COMMAND LINE

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// console.log(process.argv);

/**
 * 1. node dev-data/data/import-dev-data.js
 * 2. ctrl+c
 * 3. node dev-data/data/import-dev-data.js --import
 * 4. write the if statement
 * 5. run the command - node dev-data/data/import-dev-data.js --import
 */
