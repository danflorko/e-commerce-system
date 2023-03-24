This is a test e-commerce application with a frontend based on [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and with a backend as the mocked server provided by [json-server](https://github.com/typicode/json-server) and [faker.js](https://github.com/faker-js/faker). Specially for KITGLOBAL.

The application is also containerized by [Docker](https://github.com/docker).

# Getting Started
First, open the project folder.
## Standard way
1. Open two command line windows with **server** and **client** folders.
```bash
cd client
```
and
```bash
cd server
```
2. Install node modules in **both folders** by one of package managers which you like.
```bash
yarn
# or
npm i
# or
pnpm install
```
3. Run the **server**. In the server directory launch one of the following commands:
- `start` - is a simple command that generates mocked JSON database and launches the server at the same time.
- `gen` - is a command that generates mocked JSON database with the name `db.json` for the server.
- `server`- is a command that launches the server. NB: be careful - you need to start this command only if you already generated mocked JSON database using the previous command.
```bash
# server folder
yarn start
# or
npm run start
# or
pnpm run start
```
4. Choose the mode in which you want to run the application: **development** or **production** mode.
#### Development mode
```bash
# client folder
yarn dev
# or
npm run dev
# or
pnpm run dev
```
#### Production mode
1. Create a production build of the application.
```bash
# client folder
yarn build
# or
npm run build
# or
pnpm run build
```
2. Run the production build of the application.
```bash
# client folder
yarn start
# or
npm run start
# or
pnpm run start
```
## Docker way
1. Run the Docker. 
2. Open the command line interface in the root of the project. 
3. Run the following command:
```bash
# root folder
docker compose up
```

## Usage
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribution
- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- If you want to commit something, please use the following prefixes:
  - **feat**: (new feature for the user, not a new feature for build script)
  - **fix**: (bug fix for the user, not a fix to a build script)
  - **docs**: (changes to the documentation)
  - **style**: (formatting, missing semi colons, etc; no production code change)
  - **refactor**: (refactoring production code, eg. renaming a variable)
  - **test**: (adding missing tests, refactoring tests; no production code change)
  - **draft**: (unfinished feature)
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Docker](https://docs.docker.com/) - the official website with instructions, docs and etc about Docker.

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
