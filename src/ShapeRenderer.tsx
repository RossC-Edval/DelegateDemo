import React, { useState } from 'react';
import { BaseShape } from './Shapes/BaseShape';
import { iShapeDelegate } from './Shapes/iShapeDelegate';

const ShapeRenderer = (props: {delegate: BaseShape}): JSX.Element => {
  const delegate = props.delegate;

  const [updateTracker, update ] = useState(true);
  delegate.update = () => {
    update(!updateTracker);
  };

  console.log("Updating a shape renderer");
  return(
    <div style={{
      backgroundColor: delegate.GetColour(),
      color: "white",
      borderRadius: delegate.GetShape() === "Circle" ? "50%" : undefined,
      width: `${delegate.GetSize()}px`,
      height: `${delegate.GetSize()}px`,
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight:" 90px",
    }}
    onClick={() => {delegate.ClickBehaviour.bind(delegate)();

    }}>
      {delegate.TextInShape()}
    </div>
  );
};

export default ShapeRenderer;