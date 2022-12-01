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

- [x] Monorepo tooling ([Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna))
- [x] Precommit validation ([Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged))
- [x] Linting with recommended rules ([Eslint](https://github.com/eslint/eslint),[Prettier](https://github.com/prettier/prettier) and [Stylelint](https://github.com/stylelint/stylelint))
- [x] Github actions (test, lint, etc)
- [x] Storybook (with HMR)
- [x] CSS in Js ([Emotion](https://github.com/emotion-js/emotion))
- [x] HMR on packages ([React fast refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin))
- [x] App running in CSR and SSR
- [x] Unit testing ([Jest](https://github.com/facebook/jest) and [React testing library](https://github.com/testing-library/react-testing-library))
- [x] Bundling ([Webpack 5](https://github.com/webpack/webpack))
- [x] Prevent duplicated versions of packages ([Dedubcheck](https://github.com/innovatrics/dedubcheck))
- [x] HTTP requests on server/client Isomorphic and state management ([Apollo/client](https://github.com/apollographql/apollo-client))
- [x] Deployed to production ([Heroku](https://dashboard.heroku.com/))
- [x] End 2 End tests ([Cypress](https://github.com/cypress-io/cypress))
- [x] Auto update typescript project references([Update-ts-references](https://github.com/eBayClassifiedsGroup/update-ts-references))
- [x] Generator to create packages in the monorepo ([Hygen](https://github.com/jondot/hygen))
- [x] Graphql schema validation and type checking ([eslint-plugin-graphql](https://github.com/apollostack/eslint-plugin-graphql)) and ([apollo-tooling](https://github.com/apollographql/apollo-tooling))
- [x] Automatic create PRs to upgrade versions ([renovatebot])
- [x] Automatic use correct node version ([.nvmrc])
- [ ] Automatic create and validate the graphql schema on pipeline
- [ ] Jest shared configs easily
- [ ] Jest with recommend rules for react/node projects
- [x] Tsconfig with recommend rules for react/node projects ([tsconfig/bases](https://github.com/tsconfig/bases))
- [ ] Package Manager ([Yarn 2](https://yarnpkg.com/getting-started/migration))
- [ ] Multiple team project handling tool (Codeowners and Merge bot)
- [ ] Document how to handle peerdependencies on the monorepo
- [ ] Load tests ([Artillary](https://github.com/artilleryio/artillery))


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
cypress/
    integration/                // include ir all the tests for cypress to run
package.json                    // everytime you need a new devDependency add it here
tsconfig.json                   // everytime you add a new package modify this file by adding the new package path
```

## :keyboard: Commands

Run all the commands from the root folder
The monorepo is built in a way where you don't need to change from the root to run any command

## Download schema from apollo (introspection)

For the schema to donwload correctly you need node 14 instead of 16 because of the following issue: https://github.com/apollographql/apollo-tooling/issues/2415

```
npx apollo schema:download --endpoint=https://graphql-pokeapi.graphcdn.app/graphql schema.json

npx apollo codegen:generate --localSchemaFile=schema.json --target=typescript --includes=packages/app/**/**.tsx --tagName=gql --addTypename  types
```

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

### Test E2E
```
yarn test:e2e
```

note: you need to start the client

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

## Typescript references

They are updated automatically as soon as you do `yarn`

## :books: Biography

### Tooling
https://tooling.js.org/

### Monorepo configs
https://github.com/wixplosives/sample-monorepo

https://baltuta.eu/posts/typescript-lerna-monorepo-the-setup

### Storybook and lerna setup
https://medium.com/loftbr/creating-a-design-system-with-monorepo-bc18e055fb3c

### SSR with next and apollo client
https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

https://github.com/givehug/devto-monorepo

https://www.digitalocean.com/community/tutorials/react-react-router-ssr

https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52

### SSR react router
https://www.digitalocean.com/community/tutorials/react-react-router-ssr

### Handle watch cmd for typescript references
https://blog.logrocket.com/boost-your-productivity-with-typescript-project-references/

### Configure react fast refresh
https://github.com/pmmmwh/react-refresh-webpack-plugin/tree/main/examples/typescript-without-babel

### SSR apollo client
https://www.apollographql.com/docs/react/performance/server-side-rendering/

### Update project references
https://ebaytech.berlin/optimizing-multi-package-apps-with-typescript-project-references-d5c57a3b4440

### storybook
https://medium.com/kenshoos-engineering-blog/how-to-test-400-react-components-without-breaking-a-sweat-aa304a5cc72b

### schema checking and type checking
https://dgraph.io/blog/post/apollo-react-hooks-with-typescript/

## :memo: Contributing

Feel free to contribute to the project

## :scroll: License

[MIT](LICENSE) © [Joao Ferreira](https://github.com/joaopedrodcf/)
