# Splitterooski ๐

## What is this? 

This project shows how to maintain two incompatible approaches to yarn ๐งถ simultaneosuly.

## How do I use this?

Start by cloning the repo.
- Top level directory
    - `sh run.sh` ๐ -- _happy_
    - You just used an external node module without installing it!
- Legacy directory
    - `cd legacy`
    - `sh run.sh` ๐ฅ
    - `yarn install` -- __legacy/node_modules created__
    - `sh run.sh` ๐ -- _happy_

## What to notice?

- The mandatory usage of `yarn node` instead of `node` when invoking node directly (not needed when using yarn to invoke).
    - See documentation for more information, but start [here](https://yarnpkg.com/getting-started/migration#final-notes)
- The addition of the line `nodeLinker: node-modules` at _legacy/.yarnrc.yml_
- The shared version of yarn between projects based on: _.yarn/releases/yarn-3.4.1.cjs_
    - Run `yarn --version` from either location and you'll get 3.4.1
- The absence of a _node_modules_ directory in the top and the requirement of a node_modules directory in _legacy_
    - You will need to run a `yarn install` in that directory to get it and it won't resolve it's dependecny on lodash get otherwise.
- The _.gitignore_ file to see what we should keep and leave and how this help with "Zero Install"
    - See [this doc](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored) for more inforamtion.