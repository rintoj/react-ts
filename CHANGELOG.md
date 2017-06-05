# v2.0.2

- Fixes [#3](https://github.com/rintoj/react-ts/issues/3) - Missing dependencies for tdd

# v2.0.1

- update usage

# v2.0.0

- **breaking change** - moved `src/react-ts` to `scripts`, except `webpack.config.js` and `paths` - which are now under `src/config`. Any other library dependent on these paths must reconfigure.
- add error overlay - errors are shown right with in the browser
- migrate from `react-reflux` to [statex](https://github.com/rintoj/statex)
- fix - do not initialize git if the target folder is already under git
- create-app: add option to skip git initialization
- create-app: add option to install node modules

# v1.1.1
- fix git invocation on Windows #2

# v1.1.0
- fix path issues
- breaking change: scripts will now point to `~/react-ts` instead of `~/node_modules/react-ts`

# v1.0.14
- fix dependencies and progress messages

# v1.0.13
- fix hot load order problem in `index.tsx`

# v1.0.12
- move devDependencies to the project's `package.json`, so that installing `react-ts` becomes fast
- add `jsx-double` to `tslint.json`

# v1.0.11
- move `react-ts` outside of node modules

# v1.0.10
- add `noUsageInfo` option to create app method

# v1.0.9
- Return promise from Create app method
- Add installModules options to create app method

# v1.0.8
- Fix .gitignore

# v1.0.7
- Fix .gitignore

# v1.0.6
- Update error log

# v1.0.5
- Revert npm install

# v1.0.4
- Add .gitignore file

# v1.0.3
- Fix todo service export

# v1.0.2
- Add executable to package.json using `bin`

# v1.0.1
- Update `react-ts` version in project/package.json

# v1.0.0
- Initial version
