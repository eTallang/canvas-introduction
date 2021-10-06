export default class Circle {
  private scale = 0;

  constructor(
    private context: CanvasRenderingContext2D,
    private canvasWidth: number,
    private canvasHeight: number,
    private color: string,
    private x: number,
    private y: number,
    private dx: number,
    private dy: number,
    private radius: number
  ) {}

  private updateCircle(mouseX: number, mouseY: number) {
    if (this.x - this.radius <= 0 || this.x + this.radius >= this.canvasWidth) {
      this.dx = -this.dx;
    }
    if (
      this.y - this.radius <= 0 ||
      this.y + this.radius >= this.canvasHeight
    ) {
      this.dy = -this.dy;
    }

    if (Math.abs(this.x - mouseX) < 200 && Math.abs(this.y - mouseY) < 200) {
      if (this.scale < 60) {
        this.scale++;
      }
    } else if (this.scale > 0) {
      this.scale--;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  private drawCircle() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius + this.scale, 0, Math.PI * 2);
    this.context.closePath();
    this.context.fillStyle = this.color;
    this.context.fill();
  }

  update(mouseX: number, mouseY: number) {
    this.updateCircle(mouseX, mouseY);
    this.drawCircle();
  }
}
