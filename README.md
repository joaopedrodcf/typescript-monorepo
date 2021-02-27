# dobgook

A template of a monorepo to create a react application

## Features

[] SSR
[] CSS in JS
[] React fast refresh
[x] Precommit validation
[x] Storybook for all the components
[] Storybook with HMR
[] Stylelint , Eslint and Prettier with recommended rules
[] Tsconfig with recommend rules for react projects
[] Prettier running on json files only and eslint on js, ts, tsx

## How to make references work

Everytime you add a new package you must do the following

1. Add to root tsconfig.json the path of the new package
2. If this package is a dependency of anothe package you also need to add it to the parent tsconfig.json file

## biography

https://github.com/wixplosives/sample-monorepo

https://baltuta.eu/posts/typescript-lerna-monorepo-the-setup