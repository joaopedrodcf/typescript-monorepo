# typescript-monorepo ![language](https://img.shields.io/badge/language-typescript-blue.svg)

> Ready for development!

A template of a monorepo to create a react application.

## :books: Table of Contents

- [Features](#features)
- [Folder structure](#folder-structure)
- [Typescript references](#typescript-references)
- [Commands](#keyboard-commands)
- [Biography](#books-biography)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## Features

- [x] monorepo tooling (Yarn workspaces and Lerna)
- [x] Precommit validation (Husky and lint-staged)
- [x] Linting with recommended rules (Eslint,Prettier and Stylelint)
- [x] Github actions (test, lint, etc)
- [x] Storybook (with HMR)
- [x] CSS in Js (emotion)
- [x] HMR on packages (React fast refresh)
- [x] App running in CSR and SSR
- [x] Unit testing (jest and react testing library)
- [x] Bundling (webpack 5)
- [x] Prevent duplicated versions of packages (dedubcheck)
- [x] HTTP requests on server/client Isomorphic and state management (@apollo/client)
- [x] Deployed to production (heroku)
- [ ] Tsconfig with recommend rules for react projects
- [ ] Package Manager (Yarn 2)
- [ ] Multiple team project handling tool (Codeowners and Merge bot)
- [ ] Document how to handle peerdependencies on the monorepo


## Folder structure
```
packages/                       // feel free to add more components in this folder
    app/                        // main app that will use all the components
        src/
            index.ts
            button.tsx
            styles.tsx
        package.json            // everytime you need a new devDependency add it here
        tsconfig.json           // every package from the monorepo that you import you need to add it to references
    storybook/                  // storybook that will run all the components
        stories/                // feel free to add more components in this folder
            header/
            button/
                index.tsx
                index.stories.tsx
        package.json            // everytime you need a new devDependency add it here
        tsconfig.json           // every package from the monorepo that you import you need to add it to references
    header/                     // a header component
    button/                     // a button component
package.json                    // everytime you need a new devDependency add it here
tsconfig.json                   // everytime you add a new package modify this file by adding the new package path
```
## Typescript references

Every time you add a new package you must do the following

1. Add to root tsconfig.json the path of the new package
2. If this package is a dependency of another package you also need to add it to the parent tsconfig.json file

WIP: Create an automatic way of creating the project references

## :keyboard: Commands

Run all the commands from the root folder
The monorepo is built in a way where you don't need to change from the root to run any command

### Install dependencies
```
yarn
```

### Start dev server
```
yarn start
```

### Start production server (SSR)
```
yarn start:server
```

### Typescript build
```
yarn build
```

### Typescript watch
```
yarn watch
```

### Lint all the project
```
yarn lint
```

### Test all the project
```
yarn test
```

### Find duplicated dependencies on the project
```
yarn test:dependencies
```

### Start storybook
```
yarn storybook
```

### Heroku deploy
On your project do this steps:

Login in your heroku account
```
heroku login
```

This will create a project in the heroku account you loggedin previously
```
heroku create
```

Can be master or main the next command depending on your repo
```
git push heroku master
```

Note: This part requires you to have a heroku account

## :books: Biography

Monorepo configs
https://github.com/wixplosives/sample-monorepo

Monorepo configs
https://baltuta.eu/posts/typescript-lerna-monorepo-the-setup

Storybook and lerna setup
https://medium.com/loftbr/creating-a-design-system-with-monorepo-bc18e055fb3c

SSR with next and apollo client
https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

https://github.com/givehug/devto-monorepo

https://www.digitalocean.com/community/tutorials/react-react-router-ssr

https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52

SSR react router
https://www.digitalocean.com/community/tutorials/react-react-router-ssr

Handle watch cmd for typescript references
https://blog.logrocket.com/boost-your-productivity-with-typescript-project-references/

Configure react fast refresh
https://github.com/pmmmwh/react-refresh-webpack-plugin/tree/main/examples/typescript-without-babel


## :memo: Contributing

Feel free to contribute to the project

## :scroll: License

[MIT](LICENSE) © [Joao Ferreira](https://github.com/joaopedrodcf/)
