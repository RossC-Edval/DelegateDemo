import { Colour, iShapeDelegate, Shape } from "./iShapeDelegate";

export class BaseShape implements iShapeDelegate{

  delegate: iShapeDelegate;
  update: (() => void) | undefined = undefined;

  constructor(delegate: iShapeDelegate){
    this.delegate = delegate;
  }

  GetColour(): Colour {
    return this.delegate.GetColour()
  }

  GetShape(): Shape {
    return this.delegate.GetShape();
  }

  GetSize(): number {
    return this.delegate.GetSize();
  }

  TextInShape(): string {
    return this.delegate.TextInShape();
  }

  ClickBehaviour(): void {
    this.delegate.ClickBehaviour();
    if(this.update !== undefined){
      this.update();
    }
  }

}