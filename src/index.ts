import '../styles.scss';
import Circle from './circle';

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
    const circle = new Circle(context, canvasWidth, canvasHeight);
    circles.push(circle);
  }
}

function render() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  circles.forEach(circle => circle.update());
  window.requestAnimationFrame(render);
}

createCircles(10);
render();
