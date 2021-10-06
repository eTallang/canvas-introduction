import '../styles.scss';
import Circle from './circle';

const container = document.getElementById('root') as HTMLCanvasElement;
const context = container.getContext('2d');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

container.height = canvasHeight;
container.width = canvasWidth;
container.style.backgroundColor = 'rgba(16, 18, 25, 1)';

const circle = new Circle(context);

function render() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  circle.update();
  window.requestAnimationFrame(render);
}

render();
