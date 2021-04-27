# A Next.Js Boilerplate

[![ESLint Code Base](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/eslint.yml/badge.svg)](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/eslint.yml)
[![Prettier and ESLint Code Base](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/prettier.yml/badge.svg)](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/prettier.yml)
[![Build](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/build.yml/badge.svg)](https://github.com/SeGl1990/next-sass-tailwind-boilerplate/actions/workflows/build.yml)

This is a next.js boilerplate with pre-commits, sass and tailwind and simple github actions.

## Getting Started

Install the dependencies

```bash
# install all dependencies
npm i
npm i --save-dev husky@4.3.8
npm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier @commitlint/cli lint-staged
```

Run the development server:

```bash
# start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### esLint commands

```bash
# check the project for eslint errors and run the --fix command
npm run lint
# fix eslint errors by running prettier
npm run format
```

### Github actions

- In order to follow best practices, very simple github actions have been implemented.
- We check for EsLint errors (according to our .eslintrs.json rules)
- We check the code for prettier violations (according to our .prettierrc file)
- We check if the build process is completed successfully.

### Automatic Deployment

- This boilerplate will automatically be uploaded to heroku with every push to a branch. Thereby [Jenkins](http://localhost:8080) is used as CI/CD tool.
- [Production](https://next-sass-tailwind.herokuapp.com/)

### Basic Frontend Libraries

|                                                                 | Stars                                                                                            | Bundle size                                                                                                                                   | Maintained | Dev- Mode |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [next: 10.1.3](https://www.npmjs.com/package/next)              | ![GitHub stars](https://img.shields.io/github/stars/vercel/next.js.svg?label=%F0%9F%8C%9F)       | N/A                                                                                                                                           | ✅         | ➖        |
| [sass: 1.32.11](https://www.npmjs.com/package/sass)             | ![GitHub stars](https://img.shields.io/github/stars/sass/dart-sass.svg?label=%F0%9F%8C%9F)       | [![Bundle size](https://badgen.net/bundlephobia/minzip/sass/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=sass@1.32.11)             | ✅         | ➖        |
| [tailwindcss: 2.1.2](https://www.npmjs.com/package/tailwindcss) | ![GitHub stars](https://img.shields.io/github/stars/tailwindlabs/tailwindcss?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/tailwindcss/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=tailwindcss@2.1.2) | ✅         | ✔️        |

### Automated Workflow Libraries

|                                                                                               | Stars                                                                                          | Bundle size                                                                                                                                                                | Maintained | Dev- Mode |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [prettier: 2.2.1](https://www.npmjs.com/package/prettier)                                    | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F)  | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=prettier@2.2.1)                                    | ✅         | ✅        |
| [eslint: 7.25.0](https://www.npmjs.com/package/eslint)                                       | ![GitHub stars](https://img.shields.io/github/stars/eslint/eslint.svg?label=%F0%9F%8C%9F)      | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint@7.25.0)                                       | ✅         | ✅        |
| [eslint-config-airbnb-base: 18.2.1](https://www.npmjs.com/package/eslint-config-airbnb-base) | ![GitHub stars](https://img.shields.io/github/stars/airbnb/javascript.svg?label=%F0%9F%8C%9F)  | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint-config-airbnb-base/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint-config-airbnb-base@18.2.1) | ⚠️         | ✅        |
| [husky: 4.3.8](https://www.npmjs.com/package/husky)                                          | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)     | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=husky)                                                 | ✅         | ✅        |
| [lint-staged: 10.5.4](https://www.npmjs.com/package/lint-staged)                             | ![GitHub stars](https://img.shields.io/github/stars/okonet/lint-staged.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/lint-staged?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=lint-staged@10.5.4)                              | ✅         | ✅        |
