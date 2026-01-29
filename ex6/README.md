# Password generator

## Getting started

```sh

git checkout main

git pull origin main
```

Create a new brach.

```sh

git checkout -b ex6_password
```

Init your project.

```sh

npm init -y
```


## Instructions

In the file `password-generator.ts`, create and export a function that generate a password string with min length of 6 and max length of 20.

Using the `jest` library, create a script in the `package.json` to run the unit tests.

Test the following cases. Use the `password-generator-test.ts` file

- The function returns a string with 6 length by default.
- The function uses at least one uppercase letter, one number and one special character (`.!_"#$%&/()-`);
- The function throws an error when the maximum length is exceeded.


References:

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

https://jestjs.io/

