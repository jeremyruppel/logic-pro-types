# tslogic

Type defitions for Logic Pro' Scripter.

### usage

```ts
// @ts-check
/// <reference types="tsdoc" />
const PluginParameters: PluginParameters = [
  {
    name: "delay",
    type: "lin",
  },
]

function HandleMIDI(e: NoteOn | NoteOff) {
  e.send()
}
```

### install

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

Install `tslogic` as a devDependency of your project:

```
$ npm install --save-dev tslogic
```

Then, in your typescript source files, reference the `tslogic` types like:

```ts
/// <reference types="tslogic" />
```

### api docs

Browseable documentation can be found [here][docs].

[docs]: https://jeremyruppel.github.io/tslogic/
