# ReactJS Boilerplate

## Setting up for development

### Download and install Node

Download [`node 18.15.0`](https://nodejs.org/download/release/v18.15.0/).

### Install yarn

`npm install yarn --global`

### Install packages

`yarn`

### Create environment file

Create a `.env` file follow structure of `.env.example` file.
1. Run script `cp .env.example .env`
1. Replace variables of `.env` file with your correct environment variables

### Run the app with development mode

`yarn dev`

### Run the app with production mode

1. `yarn build`
1. `yarn preview`

## Setting up for deployment

### Download and install PM2

`npm install pm2@latest -g`

### Create ecosystem file

Create a `ecosystem.config.js` file follow structure of `ecosystem.config.example` file.
1. Run script `cp ecosystem.config.example ecosystem.config.js`
1. Replace env variables of `ecosystem.config.js` file with environment variables

## Deploy on server

### Run deploy script

`yarn deploy`
