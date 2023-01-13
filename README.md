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
    "username": "<db user name>",
    "<password>": "db password",
    "database": "Flight_Booking_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- once we have added the `src/config/config.json` ,to src folder via terminal and run `npx sequilize db:create` 
after succesfully executing it run
`npx sequelize db:migrate`

#db design 
  - Airplane Table
  - Flights
  - Airport
  - City

  - One flights belongs to one airplane but one airplane may be used in different flight 
  - A city has many airports but one airport belongs to only one city 
  - One airport belong to many flights,but on flights belongs to only one airport