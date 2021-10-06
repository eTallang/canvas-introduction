export default class Circle {
  private x = 400;
  private y = 400;

  constructor(private context: CanvasRenderingContext2D) {}

  private updatePosition() {
    this.x++;
    this.y++;
  }

  private drawCircle() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 100, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = 'white';
    this.context.fill();
  }

  update() {
    this.updatePosition();
    this.drawCircle();
  }
}
