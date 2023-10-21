/**
 * NB this needs NeedsTimingInfo to be set at the top-level scope to
 * return a timing info object
 */
declare function GetTimingInfo(): TimingInfo

interface TimingInfo {
  /**
   * Uses Boolean logic where “true” means the host transport is running.
   */
  playing: boolean
  /**
   * A floating point number indicates the beat position at the start of the
   * process block. An alternative is to use the beatPos property. See Use
   * the MIDI event beatPos property.
   */
  blockStartBeat: number
  /**
   * A floating point number indicates the beat position at the end of the
   * process block.
   */
  blockEndBeat: number
  /**
   * A floating point number indicates the length of the process block in
   * beats.
   */
  blockLength: number
  /**
   * A floating point number indicates the host tempo.
   */
  tempo: number
  /**
   * An integer number indicates the host meter numerator.
   */
  meterNumerator: number
  /**
   * An integer number indicates the host meter denominator.
   */
  meterDenominator: number
  /**
   * Uses Boolean logic where “true” means the host transport is cycling.
   */
  cycling: boolean
  /**
   * A floating point number indicates the beat position at the start of the
   * cycle range.
   */
  leftCycleBeat: number
  /**
   * A floating point number indicates the beat position at the end of the
   * cycle range.
   */
  rightCycleBeat: number
}
