# tslogic

Type defitions for Logic Pro' Scripter. Check out the [API Docs](./docs)

### usage

Create a `tsconfig.json` withe following compiler options:

```json
{
  "compilerOptions": {
    "outDir": "<where you want your scripts written out>",
    "target": "ES6",
    "skipLibCheck": true
  },
  "include": ["<your source files>"]
}
```

If you don't have one, create a `package.json`:

```
$ npm init -y
```

Install `tslogic` as a devDependency of your project:

```
$ npm install --save-dev tslogic
```

Finally, in your typescript source files, reference the `tslogic` types like:

```ts
/// <reference types="tslogic" />
```
