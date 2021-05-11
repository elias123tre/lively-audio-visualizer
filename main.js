let innerRadius = 250
let maxLength = 1080 / 2 - innerRadius
let barWidth = 10
let startHue = 0
let endHue = 180
let saturation = 50
let lightness = 50
let compensation = 50
let glow = 10
let innerMovement = 25

let showStars = true
let starColor = "#FFFFFF"
let starOpacity = 50
let starGlow = 15

let xPercent = 50
let yPercent = 50
let movementSpeed = 50
let movementRadius = 15
let roundedBars = false

let debug = document.getElementById("debug")
let middle = document.getElementById("middle")
let canvas = document.getElementById("canvas")
// Fullscreen canvas
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let axis = 0

let ctx = canvas.getContext("2d")
ctx.globalCompositeOperation = "destination-over"

function livelyAudioListener(audioArray) {
  // Set overall level
  average = audioArray.reduce((acc, val) => acc + val) / audioArray.length
  star_speed = average * 32
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
  ctx.lineCap = roundedBars ? "round" : "butt"
  ctx.shadowBlur = glow
  // Visualizer location
  let xPos = ctx.canvas.width * (xPercent / 100)
  xPos += (noise(axis) - 0.5) * ((innerRadius * movementRadius) / 100)
  let yPos = ctx.canvas.height * (yPercent / 100)
  yPos += (noise(0, axis) - 0.5) * ((innerRadius * movementRadius) / 100)
  axis += average * (movementSpeed / 100)
  // Logo center image location
  if (middle.style.display != "none") {
    middle.style.left = `${xPos}px`
    middle.style.top = `${yPos}px`
  }

  if (audio.length > 2) {
    // Draw each bar
    audio.map((val, index, arr) => {
      let ratio = (index + 0.5) / arr.length
      let halfRatio = Math.abs(((index / (arr.length / 2)) % (arr.length / 2)) - 1)
      ctx.beginPath()
      ctx.translate(xPos, yPos)
      // Rotate each bar
      ctx.rotate(2 * Math.PI * ratio)

      // Color from given hue, saturation, lightness
      let color = `hsl(${
        ((endHue - startHue) * halfRatio + startHue) % 360
      }, ${saturation}%, ${lightness}%)`
      ctx.strokeStyle = color
      ctx.shadowColor = color

      let innerOffset = average * maxLength * (innerMovement / 100)
      // Move to approparite height
      ctx.moveTo(0, innerRadius + innerOffset)
      // Draw line outwards from origin
      ctx.lineTo(0, val * maxLength + innerRadius + innerOffset)
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
    case "bgBlur":
      document.body.style.backdropFilter = `blur(${Math.round(val)}px)`
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
    case "barGlow":
      glow = val
      break
    case "innerMovement":
      innerMovement = val
      break
    case "showStars":
      showStars = val
      break
    case "starColor":
      starColor = val
      break
    case "starOpacity":
      starOpacity = val
      break
    case "starGlow":
      starGlow = val
      break
    case "xPercent":
      xPercent = val
      break
    case "yPercent":
      yPercent = val
      break
    case "shakeSpeed":
      movementSpeed = val
      break
    case "shakeRadius":
      movementRadius = val
      break
    case "roundedBars":
      roundedBars = val
      break

    default:
      // console.error(`Unknown customization option: ${name}`)
      break
  }
}
