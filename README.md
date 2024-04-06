This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Database

Run the postgres docker container

```bash
docker compose up
```

### Updating Database Schema

After modifying the `schema.prisma` file you must run two commands:

1. `npx prisma generate`
2. `npx prisma db push`

### Resetting the DB

`npx prisma migrate reset`

