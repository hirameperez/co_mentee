# Server 2

## Getting started

```sh

git checkout main

git pull origin main
```

Create a new brach.

```sh

git checkout -b ex2_server
```

Init your project.

```sh

npm init -y
```


## Instructions

You have to create a server using node.js in order to understand how a server works.

AC:

- The app must use the port 3100.
- Use the express library to create your server.
- The port should be retrieved from your env vars.
- Use the `/about` route to return a json with your info.
- Use the `/fibo/:nth` route to return the nth fibonacci number.
- The app must return the correct code if an user try to get any other route.

You have to create a PR in this repo when you finish.

Extras:

- What if an user try to get `/fibo/10000000000`? 