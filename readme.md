# NodeJS Project Scaffolding

This repo will help quickly setup a NodeJS/Express/MySQL project including example files. 

## Installation

```bash
git clone https://github.com/manuelosorio/nodejs-scaffolding.git <project-name> && cd <project-name> && yarn install
```
## Usage
'yarn' can be replaced with 'npm run'
### Build:
```bash
yarn build
```
____
```bash
yarn build:clean
```
Cleans dist folder before building out project
### Running: 
```bash
yarn dev
```
Runs nodemon concurrently with tsc watcher
____
```bash
yarn dev:verbose
```
Run tsc through nodemon with the verbose flag
____
### Clean Build File
```bash
yarn clean
```
Cleans dist folder

____
