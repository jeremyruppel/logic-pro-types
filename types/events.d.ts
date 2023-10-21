// https://support.apple.com/guide/logicpro/use-the-javascript-event-object-lgce0d0efc5a/10.7.8/mac/12.3
declare class _Event {
  /**
   * Send the event.
   */
  send(): void
  /**
   * Send the event after the specified value has elapsed (can be an integer
   * or a floating point number).
   */
  sendAfterMilliseconds(ms: number): void
  /**
   * Send the event at a specific beat (floating point number) in the host
   * timeline.
   */
  sendAtBeat(beat: number): void
  /**
   * As above, but uses the beat value as a delay in beats from the current
   * position.
   */
  sendAfterBeats(beat: number): void
  /**
   * Print the event to the plug-in console. See Use the Trace object.
   */
  trace(): void
  /**
   * Returns a String representation of the event.
   */
  toString(): string
  /**
   * Sets the articulation ID from 0–254.
   */
  // TODO check this
  toarticulationID: number
  /**
   * Set MIDI channel 1 to 16.
   */
  channel: number
  /**
   * Retrieves the event’s exact beat position.
   */
  // TODO check this
  readonly beatPos: any
}

declare class NoteOn extends _Event {
  /**
   * Pitch from 1–127.
   */
  pitch: number
  /**
   * Velocity from 0–127. A velocity value of 0 is interpreted as a note
   * off event, not a note on.
   */
  velocity: number
}

declare class NoteOff extends _Event {
  constructor(note: NoteOn)
  /**
   * Pitch from 1–127.
   */
  pitch: number
  /**
   * Velocity from 0–127.
   */
  velocity: number
}

declare class PolyPressure extends _Event {
  /**
   * Pitch from 1–127.
   */
  pitch: number
  /**
   * Define a pressure value from 0–127.
   */
  value: number
}

declare class ControlChange extends _Event {
  /**
   * Controller number from 0–127.
   */
  number: number
  /**
   * Controller value from 0–127.
   */
  value: number
}

declare class ProgramChange extends _Event {
  /**
   * Program change number from 0–127.
   */
  number: number
}

declare class ChannelPressure extends _Event {
  /**
   * Aftertouch value from 0–127.
   */
  value: number
}

declare class PitchBend extends _Event {
  /**
   * 14-bit pitch bend value from -8192–8191. A value of 0 is center.
   */
  value: number
}

declare class TargetEvent extends _Event {
  /**
   * Create user definable MIDI CC messages or control plug-in parameters.
   */
  target: string
  /**
   * Sets the target value.
   */
  value: number
}
