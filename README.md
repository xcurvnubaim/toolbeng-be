# toolbeng-be

edit enivironment variable in .env.example and rename to .env
```
MYSQL_HOST= <mysql host>
MYSQL_USER= <mysql user>
MYSQL_PASS= <mysql password user>
MYSQL_DB=   <mysql database>
```

running migration to create table
```
npm run migrate
```

running server
```
npm start
```

Route
- /login
  - POST
    - input:
      - email : string
      - password : string
    - output:
      - token
- /sigup
  - POST
    - input:
      - fullname:string, 
      - phonenumber:string,
      - password:string, 
      - email:string, (must valid email)
