# Lively Audio Visualizer

> Lively has been updated to include better support for audio visualizers. I am currently working on a new version for better intergration with the new features.

Advanced and customizable Audio Visualizer for [lively wallpaper](https://rocksdanister.github.io/lively/) (similar to Wallpaper Engine)  
See example configurations and demonstration below!

[![Github all releases](https://img.shields.io/github/downloads/elias123tre/lively-audio-visualizer/total.svg?style=flat-square&label=total%20downloads)](https://github.com/elias123tre/lively-audio-visualizer/releases/latest/download/Circle-Audio-Visualizer.zip)


## How to download

[![Download icon](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Download&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Felias123tre%2Flively-audio-visualizer%2Freleases%2Flatest&style=for-the-badge)](https://github.com/elias123tre/lively-audio-visualizer/releases/latest/download/Circle-Audio-Visualizer.zip)

1. Download the [lively wallpaper file](https://github.com/elias123tre/lively-audio-visualizer/releases/latest/download/Circle-Audio-Visualizer.zip)
2. Drag and drop the downloaded file into lively

## Demonstration

https://user-images.githubusercontent.com/18127101/118381838-84843480-b5ef-11eb-821f-5a7c5dbf2a44.mp4

## Examples

![qpyivo5q](https://user-images.githubusercontent.com/18127101/118381983-bb0e7f00-b5f0-11eb-9032-0ffc6f086f2a.gif) ![reljwqaq](https://user-images.githubusercontent.com/18127101/118381985-c19cf680-b5f0-11eb-9d61-bd5e7e75c551.gif) ![fvantbgc](https://user-images.githubusercontent.com/18127101/118382057-8b13ab80-b5f1-11eb-8a4a-ca2ac0533b25.gif) ![z1placat](https://user-images.githubusercontent.com/18127101/118382119-6bc94e00-b5f2-11eb-95a0-dd7d33461e7e.gif)

_Feel free to open an issue or pull request if want your setup here_

## Use custom background image

1. After installing the wallpaper, right click on it
2. Select `Open File Location`
3. Move your image to the `images` folder (or `logos` to add a logo, make sure the file is .jpg .png .gif or .webp)
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
- Scale of visualizer reacting to music
- Volume threshold for showing visualizer
- Video as background

## Troubleshooting

If the visualizer is not reacting to sound, try [this solution](https://help.wallpaperengine.io/en/audio/audiodetection.html#_2-hardware-specific-issues):

> USB / wireless headsets are prone to sound driver issues. For many devices, changing the audio sample rate in the Windows device settings to 44100 Hz permanently fixes the issue:  
> Right-click on the audio icon in the tray area in the lower right corner of Windows, select "Open Sound Settings". Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.  
> Set the sampling rate to "24 bit, 44100 Hz"
