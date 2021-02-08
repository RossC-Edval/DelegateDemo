import { Colour, iShapeDelegate, Shape } from "./iShapeDelegate";

export class CircleB implements iShapeDelegate {
  state: boolean = true;
  size: number = 100;

  GetColour ():Colour {
    return this.state ? "Blue" : "Green";
  }

  GetShape (): Shape {
    return "Circle";
  }

  TextInShape (): string {
    return "Circle B";
  }

GetSize(): number {
  return this.size;
}

ClickBehaviour (): void {
  this.state = !this.state;
  this.size += 5;
  console.log(this.state);

  return;
}

}