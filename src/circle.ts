export default class Circle {
  constructor(private context: CanvasRenderingContext2D) {}

  private updatePosition() {}

  private drawCircle() {
    this.context.beginPath();
    this.context.arc(400, 400, 100, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = 'white';
    this.context.fill();
  }

  update() {
    this.updatePosition();
    this.drawCircle();
  }
}
