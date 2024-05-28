# welcome to Flight services

## project setup

```
-clone the project on your local
-Excute `npm install` on the same path as of your root directory of the downloaded project
-creae a 'new' file in the root directory and addd the following environment varible
`PORT=3000`
insider the `src/config` folder create a new file `config.jason` and the add the following jason
"development": {
"username": "your datavase name",
"password": "password",
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}
```

## DB design

-Tables
-Airplane Table
-Flight
-Airport
-city

-A flights belongs to an airplane but one airplane can be used in multiple flights
-A city has many airport but one airplort belong to one city
