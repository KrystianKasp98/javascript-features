## how to use

```npm run eslint``` - checks all rules in the entire repo

```npm run eslint:fix``` - same as above and fix possible problems

## How to enable husky:

https://typicode.github.io/husky/#/

```npm install husky --save-dev```

```npx husky install```

```npx husky add .husky/pre-commit "npm run {scriptName}"```

example:

```npx husky add .husky/pre-commit "npm run test && npm run eslit:fix"```

```git add .husky/pre-commit```

remove hooks:

```git config --unset core.hooksPath```
