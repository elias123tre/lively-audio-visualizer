# Lively Audio Visualizer

Audio Visualizer for [lively wallpaper](https://rocksdanister.github.io/lively/)

![Preview gif](preview.gif)

## How to setup

Download the [latest release zip file](https://github.com/elias123tre/Lively-Audio-Visualizer/releases/latest) and drag and drop it into lively.

## Demonstration

https://user-images.githubusercontent.com/18127101/117224561-86d8d880-ae10-11eb-8c7e-fd1d79a0c89d.mp4

## Use custom background image

1. After installing the wallpaper, right click on it
2. Select `Open File Location`
3. Move your image to the `images` folder (or `logos` to add a logo)
4. Select it when customizing the wallpaper

## Features

- [x] Customizable background image
- [x] Customizable bar color
- [x] Customizable bar amplitude
- [x] Glowing bars
- [x] Customizable center logo image
- [x] Background effects (snow/stars/debris with glow, similar to Trap Nation)
- [x] Moving inner ring (similar to NCS)
- [x] Background image blur option
- [ ] Different types of visualizers (eg. lines from bottom)
- [ ] Change visualizer position
- [ ] Camera shake/wobble for background and/or visualizer
- [ ] Multi monitor background span
- [ ] Smoother bar visualizer bars

## Troubleshooting

If the visualizer is not reacting to sound, try [this solution](https://help.wallpaperengine.io/en/audio/intermittent.html):

> USB / wireless headsets are prone to sound driver issues. For many devices, changing the audio sample rate in the Windows device settings to 44100 Hz permanently fixes the issue:  
> Right-click on the audio icon in the tray area in the lower right corner of Windows, select "Open Sound Settings". Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.  
> Set the sampling rate to "24 bit, 44100 Hz"
