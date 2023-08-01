# toolbeng-be

Route
- /login
  - POST
    - input:
      - usernameOrEmail : string
      - password : string
- /sigup
  - POST
    - input:
      - username:string, 
      - password:string, (not null)
      - fullname:string, (not null)
      - email:string, (must valid email)
      - roles:string (u = user, b = bengkel)
