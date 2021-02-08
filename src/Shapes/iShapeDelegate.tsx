export interface iShapeDelegate {


  //Colour of shape
  GetColour: () => Colour;

  //Number of pixels
  GetSize: () => number;

  //Shape that the object will be drawn
  GetShape: () => Shape;

  TextInShape: () => string;

  ClickBehaviour: () => void;
}

export type Colour = "Red" | "Blue" | "Green" | "Yellow" | "Black";

export type Shape = "Circle" | "Square" | "Triangle";