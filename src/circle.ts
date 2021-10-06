export default class Circle {
  private x = 400;
  private dx = 5;

  private y = 400;
  private dy = 5;

  private radius = 100;

  constructor(
    private context: CanvasRenderingContext2D,
    private canvasWidth: number,
    private canvasHeight: number
  ) {}

  private updatePosition() {
    if (this.x - this.radius <= 0 || this.x + this.radius >= this.canvasWidth) {
      this.dx = -this.dx;
    }

    if (
      this.y - this.radius <= 0 ||
      this.y + this.radius >= this.canvasHeight
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  private drawCircle() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = 'white';
    this.context.fill();
  }

  update() {
    this.updatePosition();
    this.drawCircle();
  }
}
