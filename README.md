# Workshop HME Website

Workshop is a division under the Himpunan Mahasiswa Elektro ITB (HME ITB) which focuses on practical electronics including tool renting, electronic component shop, project freelance, and research in the IT and electronics fields.
<br />

## Tech Stacks

### Front End

- ReactJS (CRA)
- Typescript
- TailwindCSS
- Apollo Client

### Back End

- NestJS (Express)
- Typescript
- PostgreSQL
- Prisma
- GraphQL
- Passport (JWT)

## Features

### Home Page

![](https://github.com/davidf1000/workshophme-website/blob/master/docs/gif/landing.gif)

Gives information about WS HME, who we are, what services we provide including tools renting form, electronic kit product listing, and technical article.

![](https://github.com/davidf1000/workshophme-website/blob/master/docs/gif/rent.gif)

User could use the rent form to book a renting appointment by filling user data, rent time range, and list of tools. There's renting guide modal that gives detailed information on how to use our renting services.

### Admin Dashboard

![](https://github.com/davidf1000/workshophme-website/blob/master/docs/gif/admindashboard.gif)

Admin dashboard is CMS (Content Management Service) intended for internal use (Workshop Crew) to manage tools, article published, product list, and to track tools that are currently being rented.

## Build and Deployment

For frontend, to develop :

```bash
    npm run start
```

use the .env example
<br/>
to build:

```bash
    npm run build
```

For Backend, to develop :

```bash
    npm run dev
```

this script consist of prisma generate, nest start, and type generator (watchmode) ran concurrently.
<br/>
use the .env example
<br/>
To build :

```bash
    npm run build
```

To migrate db using prisma :

```bash
    npx prisma db push
```

To seed :

```bash
   npx prisma db seed
```
