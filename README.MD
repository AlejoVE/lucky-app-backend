# Lucky Test

Small technical test.

-  [Frontend](https://github.com/AlejoVE/lucky-app)

# **Backend architecture**

## **Database design**

![Database structure](https://user-images.githubusercontent.com/59319966/123554204-33836680-d77f-11eb-8008-c51f1414a174.png 'Database structure')

### **Create and/or configure environment variables**

-  Create a .env file at the root of your project folder
-  Replace all variables noted with $ below, and save it to the .env file

```
PORT=$port_number
DB_CONNECT=mongodb://localhost:27017/$db_name
REACT_APP_API_URL=$http://localhost:12345/
```

### **API endpoints**

---

**URL** https://lucky-test-app.herokuapp.com/

---

#### **Register an user**

**`POST /api/users/`**

##### **Request**

A json object for the user to register with **`firstName`**,**`lastName`** and **`email`**.

```
{
  "firstName": "alejo",
  "lastName": "Montilla"
  "email": "alejo@example.com"
}
```

##### **Response `201`**

A json object for the registered user with `msg`.

```
{
  "msg": "User created successfully"
}
```