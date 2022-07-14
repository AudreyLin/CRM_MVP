# CRM_MVP

Client Relationship management demo project

## Feature Roadmap

- contact management dashboard
- lead management
- conversion management
- client management
- client profile
- client project details
  - project discovery
  - project description
  - project scope
  - project features
  - client requests
  - existing project or new project
  - user stories
  - task pipelines
  - task management kanban
  - deadlines
  - time tracking
  - project time estimates
  - task management
  - system design docs
- client communication log
  - interaction calendar
    - per client
    - catch all for all projects
- design documentation templates & generator
  - generation of new documentation
  - apply to client in their project dashboard
  - PDF download option for the client
- contract templates
- project estimates
- client contract details
- change log & sign offs
- client invoicing itemization
- project deliverables summary & acceptance sign off
- client review form
- validation front & back
- encryption
- pwa features?

## Generate Favicons

1. [Generate your favicon files](https://realfavicongenerator.net/)
2. Extract the package download into "./frontend/public" directory
3. Insert the given code into the head section of the
   "./frontend/public/index.html" file

## DotEnv & Environment Variables

-[DotENV NPM](https://www.npmjs.com/package/dotenv) Create a .env file in
'/backend/config'. (be sure to add it to .gitignore).

## Install dependencies

```
npm install
cd frontend
npm install
```

## Run Project

### frontend

`npm run frontend`

### backend

`npm run server`

### dev Concurrently run front and back

`npm run dev`

## Proxying API requests

(Proxying API requests in
development)[https://create-react-app.dev/docs/proxying-api-requests-in-development/]
