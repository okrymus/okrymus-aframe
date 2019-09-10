/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tone from "tone/Tone/core/Tone";
// import Detector from "three/examples/js/Detector";

export const unitsPerSecond = 7;
export const circleHeight = 0;
export const radius = 1.1;
export const sceneColor = "#faa";
export const tubeColor = "#ffffff";
export const title = "Inside Music";
export const trackRadius = 2;
export const useVoiceOver = true;
export const supported = true; //Detector.webgl && Tone.supported
export const trackConfig = [
  {
    artist: "Perfume Genius",
    track: "Slip Away",
    intro: "perfume_genius",
    folder: "perfume_genius",
    segments: 5,
    duration: 170,
    // duration : 10,
    trackNames: [
      "MBIRA",
      "GUITARS",
      "OTHER_VOCALS",
      "SYNTHS_AND_PIANO",
      "BASS_AND_BASS_SYNTHS",
      "DRUMS",
      "LEAD_VOCALS"
    ],
    names: [
      "mbira",
      "guitars",
      "other vocals",
      "synths and piano",
      "bass",
      "drums",
      "lead vocals"
    ],
    soundRings: {
      startColor: "#18D2F6",
      endColor: "#FF00CD",
      shape: "circle",
      size: 5
    },
    floor: {
      color: "#262137" //'#1b1c2b'
    }
  }
];

export function getTrackData(artist) {
  const index = trackConfig.findIndex(t => t.artist === artist);
  return trackConfig[index];
}
