import '../styles.scss';

const container = document.getElementById('root') as HTMLCanvasElement;
const context = container.getContext('2d');

container.height = window.innerHeight;
container.width = window.innerWidth;
container.style.backgroundColor = 'rgba(16, 18, 25, 1)';