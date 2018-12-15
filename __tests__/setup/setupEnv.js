process.env.NODE_ENV = process.env.NODE_ENV || 'test';
const path = require('path');
require('dotenv').config({
  path: path.normalize(`${process.cwd()}/${process.env.NODE_ENV}.env`)
});
