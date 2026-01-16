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

Using middlewares you have to ensure every request have the `x-type-user` headers and includes the `'hyper'` substring.

Examples:

`'abc-hy-pe-87654'`  <- is not a valid header
`'abc-hyper8766.agsr'`  <- is a valid header


Note: Don't use the `includes` javascript function.

Return an 'unauthorized' code if the header doesn't include the substring.

You have to create a PR in this repo when you finish.


AC:

- Use the `/hello` route to test your middleware.
- The unauthorized user must not be allowed to get any resources.
- The authorized user should get a valid json message.

Extras:

- How can you implement a mechanism to get access to your users?
 