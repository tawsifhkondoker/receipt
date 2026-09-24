import JsBarcode from "jsbarcode";

// ============================================================
// RECEIPT
// ============================================================

export const receipt = {
  height: 1080,
  seed: 67,
};


// ============================================================
// MAIN
// ============================================================

export function drawReceipt(p) {
  const w = p.width;

  p.background(255);

  p.textFont("Arial");
  p.strokeJoin(p.MITER);
  p.strokeCap(p.SQUARE);

  // ==========================================================
  // HEADER
  // ==========================================================

  p.noStroke();
  p.fill(0);
  p.textAlign(p.CENTER);

  p.textStyle(p.BOLD);
  p.textSize(30);
  p.text("NIGHT RUNNER", w / 2, 32);

  p.textStyle(p.NORMAL);
  p.textSize(11);
  p.text(
    "AUTOMOTIVE DESIGN // 026",
    w / 2,
    72
  );

  dashedLine(p, 25, 102, w - 25, 102);


  // ==========================================================
  // MOTION LINES
  // ==========================================================

  p.stroke(0);
  p.strokeWeight(2);

  p.line(55, 155, 145, 155);
  p.line(75, 175, 205, 175);
  p.line(45, 195, 175, 195);
  p.line(95, 215, 255, 215);
  p.line(55, 235, 190, 235);


  // ==========================================================
  // CAR
  // ==========================================================

  drawCar(
    p,
    w / 2,
    335
  );


  // ==========================================================
  // ROAD
  // ==========================================================

  p.stroke(0);
  p.strokeWeight(2);

  p.line(
    25,
    445,
    w - 25,
    445
  );

  p.strokeWeight(3);

  for (let x = 35; x < w - 25; x += 45) {
    p.line(
      x,
      470,
      x + 22,
      470
    );
  }


  // ==========================================================
  // SIMPLE INFO
  // ==========================================================

  p.noStroke();
  p.fill(0);

  p.textAlign(p.LEFT);
  p.textStyle(p.BOLD);
  p.textSize(11);

  p.text(
    "NIGHT RUNNER",
    25,
    520
  );

  p.textStyle(p.NORMAL);
  p.textSize(9);

  p.text(
    "PERFORMANCE COUPE",
    25,
    542
  );

  p.text(
    "780 HP  /  AWD",
    25,
    564
  );


  p.textAlign(p.RIGHT);

  p.textStyle(p.BOLD);
  p.textSize(11);

  p.text(
    "320 KM/H",
    w - 25,
    520
  );

  p.textStyle(p.NORMAL);
  p.textSize(9);

  p.text(
    "2.8 SEC  0–100",
    w - 25,
    542
  );

  p.text(
    "SEED 67",
    w - 25,
    564
  );


  // ==========================================================
  // DIVIDER
  // ==========================================================

  dashedLine(
    p,
    25,
    595,
    w - 25,
    595
  );


  // ==========================================================
  // MAIN MESSAGE
  // ==========================================================

  p.textAlign(p.CENTER);

  p.textStyle(p.BOLD);
  p.textSize(16);

  p.text(
    "DRIVE YOUR OWN PATH",
    w / 2,
    630
  );

  p.textStyle(p.NORMAL);
  p.textSize(10);

  p.text(
    "NO LIMITS // EST. 2026",
    w / 2,
    655
  );


  // ==========================================================
  // BARCODE
  // ==========================================================

  drawBarcode(
    p,
    "NIGHT-RUNNER-026",
    w / 2,
    685
  );

  p.noStroke();
  p.fill(0);

  p.textStyle(p.NORMAL);
  p.textSize(9);

  p.text(
    "night-runner-026",
    w / 2,
    750
  );


  // ==========================================================
  // BOTTOM
  // ==========================================================

  p.stroke(0);
  p.strokeWeight(2);

  p.line(
    25,
    785,
    w - 25,
    785
  );

  p.noStroke();

  p.textAlign(p.CENTER);
  p.textSize(7);

  p.text(
    "AUTOMOTIVE RECEIPT // 026",
    w / 2,
    805
  );
}


// ============================================================
// SPORTS CAR
// ============================================================

function drawCar(p, cx, cy) {

  p.push();
  p.translate(cx, cy);

  // ----------------------------------------------------------
  // SHADOW
  // ----------------------------------------------------------

  p.noStroke();
  p.fill(0);

  p.ellipse(
    0,
    100,
    310,
    13
  );


  // ----------------------------------------------------------
  // BODY
  // ----------------------------------------------------------

  p.stroke(0);
  p.strokeWeight(3);
  p.fill(255);

  p.beginShape();

  p.vertex(-158, 48);
  p.vertex(-164, 32);
  p.vertex(-154, 15);

  p.vertex(-132, 0);
  p.vertex(-105, -14);

  p.vertex(-80, -25);

  p.vertex(-60, -49);
  p.vertex(-32, -65);

  p.vertex(10, -69);
  p.vertex(45, -63);

  p.vertex(77, -47);
  p.vertex(105, -25);

  p.vertex(138, -14);
  p.vertex(158, 0);

  p.vertex(169, 18);
  p.vertex(173, 35);

  p.vertex(164, 49);

  p.vertex(135, 59);
  p.vertex(100, 62);

  p.vertex(-65, 64);
  p.vertex(-128, 61);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // CABIN
  // ----------------------------------------------------------

  p.noStroke();
  p.fill(0);

  p.beginShape();

  p.vertex(-62, -43);
  p.vertex(-34, -60);
  p.vertex(8, -65);
  p.vertex(43, -60);
  p.vertex(75, -46);
  p.vertex(100, -27);

  p.vertex(55, -25);
  p.vertex(5, -26);
  p.vertex(-55, -27);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // SIDE WINDOW
  // ----------------------------------------------------------

  p.fill(170);

  p.beginShape();

  p.vertex(-54, -39);
  p.vertex(-32, -56);
  p.vertex(5, -60);
  p.vertex(23, -30);
  p.vertex(-36, -30);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // WINDSHIELD
  // ----------------------------------------------------------

  p.fill(0);

  p.beginShape();

  p.vertex(12, -63);
  p.vertex(42, -59);
  p.vertex(73, -46);
  p.vertex(96, -29);
  p.vertex(58, -29);

  p.endShape(p.CLOSE);


  // Window divider
  p.stroke(255);
  p.strokeWeight(5);

  p.line(
    27,
    -63,
    55,
    -27
  );


  // ----------------------------------------------------------
  // REAR WING
  // ----------------------------------------------------------

  p.stroke(0);
  p.strokeWeight(5);
  p.fill(0);

  p.rectMode(p.CENTER);

  p.rect(
    -119,
    -75,
    78,
    10
  );

  p.line(
    -140,
    -70,
    -136,
    -40
  );

  p.line(
    -108,
    -70,
    -104,
    -40
  );


  // ----------------------------------------------------------
  // HOOD
  // ----------------------------------------------------------

  p.strokeWeight(2);

  p.line(
    78,
    -18,
    128,
    -5
  );

  p.line(
    92,
    -8,
    143,
    5
  );


  // ----------------------------------------------------------
  // SIDE BODY LINE
  // ----------------------------------------------------------

  p.strokeWeight(3);

  p.beginShape();

  p.vertex(-105, -10);
  p.vertex(-83, 0);
  p.vertex(-69, 25);
  p.vertex(-47, 43);
  p.vertex(30, 45);

  p.endShape();


  // ----------------------------------------------------------
  // DOORS
  // ----------------------------------------------------------

  p.strokeWeight(2);

  p.line(
    -48,
    -25,
    -49,
    36
  );

  p.line(
    42,
    -25,
    42,
    38
  );


  // Door handles
  p.strokeWeight(3);

  p.line(
    -42,
    -7,
    -29,
    -7
  );

  p.line(
    20,
    -7,
    32,
    -7
  );


  // ----------------------------------------------------------
  // MIRRORS
  // ----------------------------------------------------------

  p.strokeWeight(2);

  p.line(
    -62,
    -25,
    -82,
    -31
  );

  p.line(
    62,
    -25,
    82,
    -29
  );

  p.fill(0);
  p.noStroke();

  p.ellipse(
    -85,
    -32,
    11,
    6
  );

  p.ellipse(
    85,
    -30,
    11,
    6
  );


  // ----------------------------------------------------------
  // HEADLIGHTS
  // ----------------------------------------------------------

  p.fill(255);
  p.stroke(0);
  p.strokeWeight(3);

  p.beginShape();

  p.vertex(99, 7);
  p.vertex(126, 14);
  p.vertex(149, 27);
  p.vertex(119, 23);
  p.vertex(105, 16);

  p.endShape(p.CLOSE);


  p.beginShape();

  p.vertex(141, 13);
  p.vertex(158, 25);
  p.vertex(164, 35);
  p.vertex(151, 30);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // FRONT AIR INTAKE
  // ----------------------------------------------------------

  p.noStroke();
  p.fill(0);

  p.beginShape();

  p.vertex(104, 32);
  p.vertex(149, 34);
  p.vertex(137, 54);
  p.vertex(103, 57);
  p.vertex(116, 42);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // FRONT SPLITTER
  // ----------------------------------------------------------

  p.fill(255);
  p.stroke(0);
  p.strokeWeight(3);

  p.beginShape();

  p.vertex(77, 48);
  p.vertex(114, 47);
  p.vertex(103, 61);
  p.vertex(68, 62);

  p.endShape(p.CLOSE);


  // ----------------------------------------------------------
  // REAR LIGHT
  // ----------------------------------------------------------

  p.stroke(0);
  p.strokeWeight(4);

  p.line(
    -152,
    18,
    -132,
    12
  );


  // ----------------------------------------------------------
  // SIDE SKIRT
  // ----------------------------------------------------------

  p.strokeWeight(3);

  p.line(
    -76,
    53,
    47,
    53
  );

  p.line(
    -63,
    61,
    57,
    61
  );


  // ----------------------------------------------------------
  // WHEELS
  // ----------------------------------------------------------

  drawWheel(
    p,
    -91,
    55
  );

  drawWheel(
    p,
    91,
    55
  );


  // Underbody
  p.stroke(0);
  p.strokeWeight(5);

  p.line(
    -121,
    69,
    121,
    69
  );

  p.pop();
}


// ============================================================
// WHEEL
// ============================================================

function drawWheel(p, x, y) {

  p.push();
  p.translate(x, y);

  // Tire
  p.fill(0);
  p.stroke(0);
  p.strokeWeight(3);

  p.circle(
    0,
    0,
    56
  );

  // Outer rim
  p.fill(255);
  p.strokeWeight(2);

  p.circle(
    0,
    0,
    44
  );

  // Inner rim
  p.fill(0);

  p.circle(
    0,
    0,
    35
  );

  // Center ring
  p.fill(255);

  p.circle(
    0,
    0,
    27
  );

  // Hub
  p.fill(0);

  p.circle(
    0,
    0,
    17
  );

  // Spokes
  p.stroke(255);
  p.strokeWeight(3);

  for (
    let angle = 0;
    angle < 360;
    angle += 45
  ) {

    const a = p.radians(angle);

    p.line(
      p.cos(a) * 3,
      p.sin(a) * 3,
      p.cos(a) * 14,
      p.sin(a) * 14
    );
  }

  // Center
  p.noStroke();
  p.fill(255);

  p.circle(
    0,
    0,
    7
  );

  p.pop();
}


// ============================================================
// BARCODE
// ============================================================

function drawBarcode(
  p,
  value,
  centerX,
  y
) {

  const canvas =
    document.createElement("canvas");

  JsBarcode(
    canvas,
    value,
    {
      format: "CODE128",
      width: 2,
      height: 45,
      displayValue: false,
      margin: 0,
      background: "#ffffff",
      lineColor: "#000000"
    }
  );

  p.drawingContext.drawImage(
    canvas,
    Math.floor(
      centerX -
      canvas.width / 2
    ),
    y
  );
}


// ============================================================
// DASHED LINE
// ============================================================

function dashedLine(
  p,
  x1,
  y1,
  x2,
  y2
) {

  p.stroke(0);
  p.strokeWeight(2);

  const dash = 9;
  const gap = 6;

  let x = x1;

  while (x < x2) {

    p.line(
      x,
      y1,
      Math.min(x + dash, x2),
      y2
    );

    x += dash + gap;
  }
}
