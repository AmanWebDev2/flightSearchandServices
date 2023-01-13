//different project structures
# Welcome to Flights Service


## Project Setup
- clone the project on your local system 
- Execute `npm install` on the same path as your root directory of tech downloaded project 
- Create a `.env` file in the root directory and add the following enviroment variabel
    - `PORT=3000`
- Inside the `src/config` folder and create a new file `config.json` adn the add the following peice of json
```json
{
  "development": {
    "username": <db user >,
    <password>: "db password",
    "database": "Flight_Booking_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```