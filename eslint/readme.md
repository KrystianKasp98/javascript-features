## how to use

```npm run eslint``` - checks all rules in the entire repo

```npm run eslint:fix``` - same as above and fix possible problems

add to this line of code:

```JSON
  "husky": {
    "hooks": {
      "pre-push": "CI=true npm run eslint:fix && npm run test"
    }
  },
```

to ```package.json```

