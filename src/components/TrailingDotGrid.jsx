// src/components/TrailingDotGrid.js
import React from 'react';
import Sketch from 'react-p5';

let spacing = 40;
let cols, rows;
let dots = [];

const Dot = function (x, y) {
  this.x = x;
  this.y = y;
  this.r = 4;

  this.show = (p, mouseX, mouseY) => {
    p.noStroke();
  
    // Calculate distance from mouse
    const d = p.dist(mouseX, mouseY, this.x, this.y);
  
    // Opacity logic based on distance
    let baseOpacity = 70; // default low opacity
    let maxOpacity = 255;
    let hoverRadius = 100;
  
    let alpha = baseOpacity;
  
    if (d < hoverRadius) {
      // Linearly interpolate opacity (closer = more opaque)
      alpha = p.map(d, 0, hoverRadius, maxOpacity, baseOpacity);
    }
  
    p.fill(150, alpha); // gray with dynamic alpha
    p.circle(this.x, this.y, this.r);
  
    // // Optional: keep connecting lines only close to the mouse
    // if (d < hoverRadius) {
    //   p.stroke(255, alpha);
    //   p.line(this.x, this.y, mouseX, mouseY);
    // }
  };
  
};

export default function TrailingDotGrid() {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef);
    cols = Math.floor(p.width / spacing);
    rows = Math.floor(p.height / spacing);

    dots = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * spacing;
        let y = j * spacing;
        dots.push(new Dot(x, y));
      }
    }

    p.noCursor(); // Optional: hide default cursor
  };

  const draw = (p) => {
    p.clear(); // Transparent background
    dots.forEach((dot) => dot.show(p, p.mouseX, p.mouseY));
  };

  const windowResized = (p) => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    setup(p, p.canvas.parent());
  };

  return (
  <div
    className="dot-bg"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,          // behind everything
      pointerEvents: "none" // prevents blocking clicks
    }}
  >
    <Sketch setup={setup} draw={draw} windowResized={windowResized} />
  </div>
);

}
