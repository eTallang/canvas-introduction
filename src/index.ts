import '../styles.scss';
import Circle from './circle';

const colors = ['#fffce0', '#D94862', '#F26849'];
const container = document.getElementById('root') as HTMLCanvasElement;
const context = container.getContext('2d');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

container.height = canvasHeight;
container.width = canvasWidth;
container.style.backgroundColor = 'rgba(16, 18, 25, 1)';

let circles: Circle[];

function createCircles(amount: number) {
  circles = [];

  for (let i = 0; i < amount; i++) {
    const size = Math.random();
    const radius = size * 5;
    const x = Math.random() * (canvasWidth - radius * 2) + radius;
    const y = Math.random() * (canvasHeight - radius * 2) + radius;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const dx = Math.random() * size * 2 * (3 - 6 * Math.round(Math.random()));
    const dy = Math.random() * size * 2 * (3 - 6 * Math.round(Math.random()));

    const circle = new Circle(
      context,
      canvasWidth,
      canvasHeight,
      color,
      x,
      y,
      dx,
      dy,
      radius
    );
    circles.push(circle);
  }
}

function render() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  circles.forEach((circle) => circle.update());
  window.requestAnimationFrame(render);
}

createCircles(400);
render();
