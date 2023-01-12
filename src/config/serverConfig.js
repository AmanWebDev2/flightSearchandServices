//for seting up the .dot env files in more cleaner way
const dotenv=require("dotenv");
dotenv.config();
module.exports = {
   PORT:process.env.PORT
}