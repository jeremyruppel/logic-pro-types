// https://support.apple.com/guide/logicpro/create-scripter-controls-lgce9f7063b5/10.7.8/mac/12.3

declare function SetParameter(name: string, value: number): void
declare function GetParameter(name: string): number
declare function UpdatePluginParameters(): void

type Parameter = {
  name: string
  /**
   * Type a string to present a unit description in the plug-in controls. If
   * no value is typed, the default behavior is to display no unit.
   */
  unit?: "ms"
  /**
   * Type an integer or floating point number to set a minimum value. If no
   * value is typed, the default is 0.0.
   */
  minValue?: number
  /**
   * Type an integer or floating point number to set a maximum value. If no
   * value is typed, the default is 1.0.
   */
  maxValue?: number
  /**
   * Type an integer or floating point number to set a default value. If no
   * value is typed, the default is 0.0.
   */
  defaultValue?: number
  /**
   * Type an integer number to define the number of steps.
   */
  numberOfSteps?: number
  /**
   * Type text to create a divider or header in the plug-in UI.
   */
  text?: string
}

type Lin = Parameter & {
  type: "lin"
}

type Log = Parameter & {
  type: "log"
}

type Momentary = Parameter & {
  type: "momentary"
}

type Menu = Parameter & {
  valueStrings: string[]
}

declare type PluginParameters = PluginParameter[]

declare type PluginParameter = Lin | Log | Momentary | Menu
