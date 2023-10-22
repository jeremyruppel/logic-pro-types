# logic-pro-types

Type defitions for Logic Pro' Scripter.

### usage

Now you can do this, complete with type hints:

```ts
// @ts-check
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

  if (e instanceof NodeOn) {
    const echo = new NoteOn()
    echo.sendAfterMilliseconds(GetParameter("delay"))
  }
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

Install `logic-pro-types` as a devDependency of your project:

```
$ npm install --save-dev logic-pro-types
```

Then, in your typescript source files, reference the `logic-pro-types` types like:

```ts
/// <reference types="logic-pro-types" />
```

### api docs

Browseable documentation can be found [here][docs].

[docs]: https://jeremyruppel.github.io/tslogic/
