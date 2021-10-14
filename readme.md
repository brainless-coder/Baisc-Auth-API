# Auth API

An API for basic authentication using Node, Express JS, bcrypt and mongoose.

## Endpoints
1. /api/sign_up - An endpoint for a new user signing up.

- HTTP Method - POST
- Format: JSON

### Sample Request Body
```
{
  "name": "James Smith",
  "email": "james@jsmith.com",
  "password": "strongPassword23!"
}
```

### Response
### Valid Request Status Code: 201

- ### Response body
```
{
  "success": true
}
```
### Invalid Response Status Code: 400

- ### Response body
```
{
  "success": false
}
```
<br>
2. /api/sign_in: An endpoint for an existing user. Should give success on correct credentials and failure on wrong ones in the below mentioned format.

- HTTP Method - POST
- Format: json
### Sample Request Body
```
{
  "email": "james@jsmith.com",
  "password": "strongPassword23!"
}
```
<br>
3. /api/clean: Endpoint to delete all existing users in the sytem.

- HTTP Method - POST
- This request has no body

### Response Body
```
{
  "success": true
}
```


## Steps to run Project locally
- Fork and Clone the repo
- open project in your favourite IDE
- Open Terminal
- npm install
- npm run dev
  
`Now you can test the API by making POST requests using postman. ` 