import '../styles.scss';
import Circle from './circle';

const container = document.getElementById('root') as HTMLCanvasElement;
const context = container.getContext('2d');

container.height = window.innerHeight;
container.width = window.innerWidth;
container.style.backgroundColor = 'rgba(16, 18, 25, 1)';

const circle = new Circle(context);

function render() {
  circle.update();
  window.requestAnimationFrame(render);
}

render();
