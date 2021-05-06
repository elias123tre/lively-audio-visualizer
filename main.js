let innerRadius = 250
let maxLength = 1080 / 2 - innerRadius
let barWidth = 10
let startHue = 0
let endHue = 180
let saturation = 50
let lightness = 50
let compensation = 50

let debug = document.getElementById("debug")
let middle = document.getElementById("middle")
let canvas = document.getElementById("canvas")
// Fullscreen canvas
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

let ctx = canvas.getContext("2d")
ctx.globalCompositeOperation = "destination-over"

// Todo: Gradient color for bars
// let grad = ctx.createLinearGradient(50, 50, 150, 150)
// grad.addColorStop(0, "red")
// grad.addColorStop(1, "green")
// ctx.strokeStyle = grad

function livelyAudioListener(audioArray) {
  // Remove duplicate frequencies
  let audio = audioArray.filter((elem, idx, arr) => arr[idx - 1] !== elem)
  // Compensate for overamplified bass
  audio = audio.map((elem, idx, arr) => {
    return elem * (idx / arr.length + (100 - compensation + 50) / 100)
  })
  // Mirror on vertical axis
  audio = audio.slice().reverse().concat(audio)

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.lineWidth = barWidth
  ctx.lineCap = "round"

  if (audio.length > 2) {
    // Draw each bar
    audio.map((val, index, arr) => {
      let ratio = (index + 0.5) / arr.length
      let halfRatio = Math.abs(((index / (arr.length / 2)) % (arr.length / 2)) - 1)
      ctx.beginPath()
      // Center origin
      ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
      ctx.rotate(2 * Math.PI * ratio)

      // Color from given hue, saturation, lightness
      ctx.strokeStyle = `hsl(${
        ((endHue - startHue) * halfRatio + startHue) % 360
      }, ${saturation}%, ${lightness}%)`

      // Move to approparite height
      ctx.moveTo(0, innerRadius)
      // Draw line outwards from origin
      ctx.lineTo(0, val * maxLength + innerRadius)
      // Apply stroke
      ctx.stroke()
      // Reset current transformation matrix to the identity matrix
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    })
  }
}

function livelyPropertyListener(name, val) {
  // debug.textContent += `Name: ${name} Val: ${val}`
  switch (name) {
    case "innerRadius":
      innerRadius = (canvas.height / 2) * (val / 100)
      // Logo image width & height
      middle.style.width = `${innerRadius * 2}px`
      middle.style.height = `${innerRadius * 2}px`
      break
    case "middleImageScale":
      middle.style.transform = `translate(-50%, -50%) scale(${val / 100})`
      break
    case "maxLength":
      // Bar length, val = 100 -> reach border of screen
      maxLength = (canvas.height / 2 - innerRadius) * (val / 100)
      break
    case "bgImage":
      document.body.style.backgroundImage = `url(/${val.replace(/\\/g, "/")})`
      break
    case "useMiddleImage":
      middle.style.display = val ? "block" : "none"
      break
    case "middleImage":
      middle.src = `/${val.replace(/\\/g, "/")}`
      break
    case "barWidth":
      barWidth = val
      break
    case "startHue":
      startHue = val
      break
    case "endHue":
      endHue = val
      break
    case "saturation":
      saturation = val
      break
    case "lightness":
      lightness = val
      break
    case "barCompensation":
      compensation = val
      break

    default:
      console.error(`Unknown customization option: ${name}`)
      break
  }
}
