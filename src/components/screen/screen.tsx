import React from "react";
import './screen.scss';

interface ScreenProps {
  output: string | number;
}

export default function Screen({ output }: ScreenProps) {

  return (
    <div data-testid="component-screen" className="screen">
      <input data-testid="component-screen-input" className="output" readOnly value={output}/>
    </div>
  );
}