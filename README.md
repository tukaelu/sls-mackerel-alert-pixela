[WIP]sls-mackerel-alert-pixela
---

## Installation

Clone this repository and install node modules.
```
$ git clone git@github.com:tukaelu/sls-mackerel-alert-pixela.git
$ cd sls-mackerel-alert-pixela
$ yarn

or

$ npm install
```

## Setup

Edit the following 3 items of variables of serverless.yml.

- functions > endpoint > environment
    - PIXELA_USER
    - PIXELA_TOKEN
    - PIXELA_GRAPH_ID

## Deploy

Deploy your aws lambda environment.

```
$ sls -s prod deploy
```
