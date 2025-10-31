// Shared animation script for all pages
const canvas = document.getElementById("animated-bg")
if (canvas) {
  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  const particles = []
  const particleCount = 100
  const connectionDistance = 150

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.8
      this.vy = (Math.random() - 0.5) * 0.8
      this.radius = Math.random() * 2.5 + 1
      this.opacity = Math.random() * 0.5 + 0.3
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`
      ctx.fill()

      ctx.shadowBlur = 10
      ctx.shadowColor = "rgba(0, 217, 255, 0.5)"
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.4
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`
          ctx.lineWidth = 1.5
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.shadowBlur = 0

    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    connectParticles()
    requestAnimationFrame(animate)
  }

  animate()
}
