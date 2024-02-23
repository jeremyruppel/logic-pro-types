# logic-pro-types

TypeScript type definitions for Logic Pro's Scripter.

### usage

Now you can do this, complete with type hints:

```ts
/// <reference types="logic-pro-types" />
const PluginParameters: PluginParameters = [
  {
    name: "delay",
    type: "lin",
    minValue: 100,
    maxValue: 500,
    defaultValue: 200,
  },
]

function HandleMIDI(e: NoteOn | NoteOff) {
  e.send()

  if (e instanceof NoteOn) {
    const echo = new NoteOn()
    echo.sendAfterMilliseconds(GetParameter("delay"))
  }
}
```

### install

Create a `tsconfig.json` with the following compiler options:

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

Install `typescript` and `logic-pro-types` devDependencies of your project:

```
$ npm install --save-dev typescript logic-pro-types
```

Then, in your .ts source files, reference the `logic-pro-types` types like:

```ts
/// <reference types="logic-pro-types" />
```

### TypeScript API Docs

Browseable documentation can be found [here][docs].

[docs]: https://jeremyruppel.github.io/logic-pro-types/
