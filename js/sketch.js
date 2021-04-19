let w = window.innerWidth
let h = window.innerHeight

let innerRadius = h / 4
let maxLength = h / 2 - innerRadius
let thickness = 4
let boost = 2

function livelyAudioListener(audioarray) {
  audioarray = audioarray.filter((elem, idx, arr) => arr[idx - 1] !== elem)
  push() // Start drawing
  clear()
  colorMode(HSL)
  strokeWeight(thickness)
  translate(w / 2, h / 2)
  // line(0, -h / 2, 0, h / 2) // Center line

  // audioarray = audioarray.map((elem, index) => elem * Math.pow(2, -Math.pow(index, 4)))
  // text(audioarray.join("\n"), 0, -h / 2)
  // for (let i = 1; i < audioarray.length; i++) {
  //   const ampl = audioarray[i]
  //   const x = -w / 2 + w * (i / audioarray.length)
  //   const lastAmpl = audioarray[i - 1]
  //   const lastX = -w / 2 + w * ((i - 1) / audioarray.length)
  //   line(lastX, -lastAmpl * (h / 2), x, -ampl * (h / 2))
  // }

  // for (let i = 0; i < audioarray.length; i++) {
  //   const ampl = audioarray[i]
  //   const x = -w / 2 + w * (i / audioarray.length)
  //   line(x, 0, x, -ampl * (h / 2))
  // }

  if (audioarray.length > 1) {
    audioarray = audioarray.reverse().concat(audioarray.slice().reverse())
    rotate(TWO_PI / audioarray.length / 2)
    for (let index = 0; index < audioarray.length; index++) {
      let ampl = audioarray[index]
      ampl *= boost
      stroke((206 + index) % 360, 74, 57, 1) // Hue(360),Saturation(100),Lightness(100),Opacity(1)
      line(0, innerRadius, 0, innerRadius + ampl * maxLength)
      rotate(TWO_PI / audioarray.length)
    }
  }

  pop() // End drawing
}

function setup() {
  createCanvas(w, h)
  noLoop()
}

function drawSpectrum() {
  strokeWeight(thickness)
  for (let v = 0; v < TWO_PI; v += TWO_PI / spokes) {
    let innerX = cos(v) * innerRadius
    let innerY = sin(v) * innerRadius
    let vec = new p5.Vector(innerX, innerY)
    vec.setMag(maxLength + innerRadius)

    line(w / 2 + innerX, h / 2 + innerY, w / 2 + vec.x, h / 2 + vec.y)
  }
}
