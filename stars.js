let n = 256
let w = document.documentElement.clientWidth
let h = document.documentElement.clientHeight
let x_mid = Math.round(w / 2)
let y_mid = Math.round(h / 2)
let z = (w + h) / 2
let star_color_ratio = 1 / z
let star_x_save, star_y_save
let star_ratio = 256
let star_speed = 4
let stars = []

let context

function init() {
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * w * 2 - x_mid * 2,
      y: Math.random() * h * 2 - y_mid * 2,
      speed: Math.round(Math.random() * z),
      new_x: 0,
      new_y: 0,
      size: Math.round(Math.random() * 6 + 2),
    })
  }
  let starfield = document.getElementById("starfield")
  starfield.width = w
  starfield.height = h
  context = starfield.getContext("2d")
  context.lineCap = "round"
  // context.filter = "blur(1px)"
}

function anim() {
  context.clearRect(0, 0, w, h)
  context.strokeStyle = starColor
  context.globalAlpha = starOpacity / 100
  context.shadowBlur = starGlow
  context.shadowColor = starColor

  if (showStars && star_speed) {
    for (let star of stars) {
      star_x_save = star.new_x
      star_y_save = star.new_y
      star.speed -= star_speed
      if (star.speed < 0) {
        star.speed += z
      }
      star.new_x = x_mid + (star.x / star.speed) * star_ratio
      star.new_y = y_mid + (star.y / star.speed) * star_ratio
      if (star_x_save > 0 && star_x_save < w && star_y_save > 0 && star_y_save < h) {
        context.lineWidth = (1 - star_color_ratio * star.speed) * 2
        context.beginPath()
        context.translate(
          starfield.width * (xPercent / 100 - 0.5),
          starfield.height * (yPercent / 100 - 0.5)
        )
        context.lineWidth = star.size
        context.moveTo(star_x_save, star_y_save)
        context.lineTo(star_x_save, star_y_save)
        // context.lineTo(star.new_x, star.new_y)
        context.stroke()
        // Reset translation
        context.setTransform(1, 0, 0, 1, 0, 0)
      }
    }
  }
}

init()
setInterval(anim, 16)
// anim()
