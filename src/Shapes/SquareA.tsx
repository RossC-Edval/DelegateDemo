import { Colour, iShapeDelegate, Shape } from "./iShapeDelegate";

export class SquareA implements iShapeDelegate {
  GetColour ():Colour {
    return "Red";
  }

  GetShape (): Shape {
    return "Square";
  }

  TextInShape (): string {
    return "Square A";
  }

GetSize(): number {
  return 100;
}

ClickBehaviour (): void {
  return;
}

}