# Lively Audio Visualizer

Advanced and customizable Audio Visualizer for [lively wallpaper](https://rocksdanister.github.io/lively/) (similar to Wallpaper Engine)

![Preview gif](qpyivo5q.gif)

[![Github all releases](https://img.shields.io/github/downloads/elias123tre/lively-audio-visualizer/total.svg?style=flat-square)](https://github.com/elias123tre/lively-audio-visualizer/releases/latest)

## How to download

1. Go to the [latest release](https://github.com/elias123tre/Lively-Audio-Visualizer/releases/latest)
2. Click file named `Circle-Audio-Visualizer.zip` to download it
3. Drag and drop the downloaded file into lively

## Example demonstrations

https://user-images.githubusercontent.com/18127101/117224561-86d8d880-ae10-11eb-8c7e-fd1d79a0c89d.mp4

_Stay tuned for more examples_

## Use custom background image

1. After installing the wallpaper, right click on it
2. Select `Open File Location`
3. Move your image to the `images` folder (or `logos` to add a logo)
4. Select it when customizing the wallpaper

## Customizable features

- Background image
  - Custom image
  - Custom blur percentage
- Visualizer
  - Custom length, shape, glow and top & bottom color for spectrum lines
  - Custom size, reactivity (moving inner circle), bass offset for visualizer
  - Custom center logo (see example)
  - Custom shake/wobble reacting to audio with speed and radius adjustments
  - Custom shadow for spectrum + logo (change offsett, blur and opacity)
- Background effects (similar to Trap Nation)
  - Stars/snow/debris floating towards you (see example)
  - Custom color, opacity, glow and blur
  - Can be turned off
- Visualizer position
  - Custom horizontal and vertical position based on screen width, height
  - Can be used with span to only show on one monitor (if you have multiple)

## Upcoming features

- Different types of visualizers (eg. lines from bottom or sparkline around center)
- Smoother visualizer (less lag/jumping)

## Troubleshooting

If the visualizer is not reacting to sound, try [this solution](https://help.wallpaperengine.io/en/audio/intermittent.html):

> USB / wireless headsets are prone to sound driver issues. For many devices, changing the audio sample rate in the Windows device settings to 44100 Hz permanently fixes the issue:  
> Right-click on the audio icon in the tray area in the lower right corner of Windows, select "Open Sound Settings". Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.  
> Set the sampling rate to "24 bit, 44100 Hz"
