let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#911d67;">Estudio Ingeniería en sitemas y me gusta la fotografía.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
