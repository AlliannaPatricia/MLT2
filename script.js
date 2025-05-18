/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and Container */
body {
  background: linear-gradient(to bottom, #ffe4e1, #fff0f5);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #6b3e3e;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  padding-bottom: 2rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: rgba(255, 240, 245, 0.85);
  border-radius: 10px;
  box-shadow: 0 0 15px #f4c2c2;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #d66b81;
}

h2 {
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  color: #b05065;
  border-bottom: 2px solid #f7a8a8;
  padding-bottom: 0.3rem;
}

ul {
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.screenshots img {
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow: 0 0 10px #f7a8a8;
}

/* Sakura Animation */

.sakura-animation {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image:
    url('images/sakura-petal.png'); /* use a sakura petal PNG with transparency */
  background-repeat: repeat;
  animation: sakuraFall 15s linear infinite;
  opacity: 0.6;
}

@keyframes sakuraFall {
  0% {
    background-position: 0 -100px;
  }
  100% {
    background-position: 0 100vh;
  }
}

/* Sakura trailing effect with petals falling (using pseudo elements) */

.sakura-animation::before,
.sakura-animation::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url('images/sakura-petal.png');
  background-size: cover;
  opacity: 0.7;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.sakura-animation::before {
  top: -40px;
  left: 20%;
  animation-name: fall1;
  animation-duration: 12s;
}

.sakura-animation::after {
  top: -40px;
  left: 70%;
  animation-name: fall2;
  animation-duration: 15s;
}

@keyframes fall1 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes fall2 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  100% {
    transform: translateY(100vh) rotate(-360deg);
    opacity: 0;
  }
}

/* Audio controls hidden */

audio {
  display: none;
}

