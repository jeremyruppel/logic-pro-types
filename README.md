# logic-pro-types

TypeScript type definitions for Logic Pro's Scripter.

### usage

Now you can do this, complete with type hints:

```ts
/// <reference types="logic-pro-types" />

var PluginParameters: PluginParameters = [
  {
    name: "Millisecond Delay",
    type: "lin",
    minValue: 0,
    maxValue: 200,
    defaultValue: 100,
  },
]
/**
 * Sends a note after a random delay between 0 and 100 milliseconds.
 */
function HandleMIDI(e: NoteOn | NoteOff) {
  if (e instanceof NoteOn) {
    // original note on
    e.send()
    // additional note ons with random delay
    e.sendAfterMilliseconds(Math.random() * GetParameter("Millisecond Delay"))
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
