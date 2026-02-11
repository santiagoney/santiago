let brushPanelLayer;
let masterpiece;
let paletteBkg;
let brushOpacity;
let brushSize = 8;
let brushes = [];
let saveButton;
let clearButton;
let currentBrush;
let brush;
let brushSizeGrowth = 5;
let brushRotation = 0;
let currentBrushIndex = 0;
let Bcolors;
let selectedBColors = [];
let Bdim = 5;

// Selection tool variables
let selectionMode = false; // Toggle for selection mode
let selectionStart = null; // Starting point of selection
let selectionEnd = null; // Ending point of selection
let selectionButton; // Button to toggle selection mode
let createBrushFromSelectionButton; // Button to create a brush from selection

// Hue-cycling variables
let hueCycleButton; // Button to toggle hue-cycling
let hueCycling = false; // Toggle for hue-cycling mode
let hueCycleStopped = false; // Toggle for stopping hue-cycling at a specific hue
let hueAngle = 0; // Current hue angle (0-360)
let hueCycleSpeed = 5; // Speed of hue cycling (degrees per frame)
let hueCycleSpeedSlider; // Slider to control hue-cycling speed

// Lightness-cycling variables
let lightnessCycleButton; // Button to toggle lightness-cycling
let lightnessCycling = false; // Toggle for lightness-cycling mode
let lightnessAngle = 0; // Current angle for the sine wave (0-360)
let lightnessCycleSpeed = 5; // Speed of lightness cycling (degrees per frame)
let lightnessAmplitudeSlider; // Slider to control the amplitude of lightness variation
let lightnessCycleSpeedSlider; // Slider to control the speed of lightness cycling

// Brush spacing variables
let brushSpacingSlider; // Slider to control brush spacing
let lastDrawPos = null; // Track the last position where a brush stroke was drawn
let accumulatedDistance = 0; // Track the distance moved since the last brush stroke
let lastPaintTime = 0; // Track the last time a brush stroke was painted (for spacing when stationary)

// Toolbox variables
let toolboxWidth = 200; // Width of the toolbox on the left side
let canvasXOffset; // X position where the canvas starts
let canvasWidth; // Width of the canvas area

// Color brushes variables
let colorBrushes = []; // Array to store the tiny color brushes
let paletteColors; // Array to store the 24 colors from the palette

let growKeyPressed = false;
let decreaseKeyPressed = false;
let rotateClockwiseKeyPressed = false;
let rotateCounterClockwiseKeyPressed = false;

function setup() {
  try {
    // Disable p5.js friendly errors to avoid translation issues
    p5.disableFriendlyErrors = true;

    createCanvas(windowWidth, windowHeight);

    // Calculate canvas dimensions
    canvasXOffset = toolboxWidth;
    canvasWidth = windowWidth - toolboxWidth;

    // Initialize graphics layers
    brushPanelLayer = createGraphics(windowWidth, windowHeight);
    masterpiece = createGraphics(canvasWidth, windowHeight); // Canvas starts to the right of the toolbox
    masterpiece.background(220, 200, 180);
    masterpiece.imageMode(CENTER);

    // Define the palette colors (from the palette on the right)
    paletteColors = [
      color(255, 204, 0),   // Bright Yellow
      color(255, 102, 0),   // Orange
      color(153, 0, 51),    // Dark Red
      color(0, 102, 153),   // Teal Blue
      color(0, 0, 153),     // Deep Blue
      color(255, 255, 0),   // Vivid Yellow
      color(255, 153, 0),   // Light Orange
      color(153, 51, 0),    // Brown
      color(102, 0, 0),     // Dark Brown
      color(0, 153, 204),   // Light Teal
      color(0, 51, 102),    // Dark Teal
      color(204, 0, 0),     // Bright Red
      color(255, 204, 102), // Pale Yellow
      color(204, 102, 0),   // Dark Orange
      color(153, 0, 0),     // Deep Red
      color(0, 204, 255),   // Cyan
      color(0, 102, 204),   // Sky Blue
      color(153, 0, 0),     // Deep Red (same as above)
      color(0, 204, 204),   // Turquoise
      color(153, 0, 153),   // Magenta
      color(255, 255, 102), // Light Yellow
      color(255, 0, 0),     // Pure Red
      color(180, 180, 180), // Toolbox Gray (preserved)
      color(220, 200, 180), // Canvas Beige (preserved)
    ];

    // Create tiny color brushes
    for (let i = 0; i < paletteColors.length; i++) {
      let colorBrush = createGraphics(20, 20); // Tiny 20x20 square
      colorBrush.noStroke();
      colorBrush.fill(paletteColors[i]);
      colorBrush.rect(0, 0, 20, 20);
      colorBrushes.push(colorBrush);
    }

    console.log("Calling doEstampas...");
    doEstampas();
    console.log("doEstampas completed, estampas:", estampas);

    for (let i = 0; i < 21; i++) {
      if (estampas[i]) {
        brushes[i] = estampas[i];
      } else {
        console.warn(`estampas[${i}] is undefined`);
      }
    }

    currentBrush = brushes[0];
    if (!currentBrush) {
      console.error("Initial currentBrush is undefined");
    }

    // Set up UI elements in the toolbox
    let toolboxX = 10; // X position for elements inside the toolbox
    let buttonYStart = 10; // Starting Y position for buttons
    let buttonSpacing = 40; // Vertical spacing between buttons

    // Save button
    saveButton = createButton("Save");
    saveButton.position(toolboxX, buttonYStart);
    saveButton.mousePressed(saveImage);
    saveButton.style("color", "#B0B0B0"); // Gray text
    saveButton.style("background-color", "#000000"); // Black background

    // New Brushes button
    nbButton = createButton("New Brushes");
    nbButton.position(toolboxX, buttonYStart + buttonSpacing);
    nbButton.mousePressed(newBrushes);
    nbButton.style("color", "#B0B0B0"); // Gray text
    nbButton.style("background-color", "#000000"); // Black background

    // Clear Canvas button
    clearButton = createButton("Clear Canvas");
    clearButton.position(toolboxX, buttonYStart + 2 * buttonSpacing);
    clearButton.mousePressed(clearCanvas);
    clearButton.style("color", "#B0B0B0"); // Gray text
    clearButton.style("background-color", "#000000"); // Black background

    // Selection Mode button
    selectionButton = createButton("Selection Mode");
    selectionButton.position(toolboxX, buttonYStart + 3 * buttonSpacing);
    selectionButton.mousePressed(toggleSelectionMode);
    selectionButton.style("color", "#B0B0B0"); // Gray text
    selectionButton.style("background-color", "#000000"); // Black background

    // Create Brush from Selection button
    createBrushFromSelectionButton = createButton("Create Brush from Selection");
    createBrushFromSelectionButton.position(toolboxX, buttonYStart + 4 * buttonSpacing);
    createBrushFromSelectionButton.mousePressed(createBrushFromSelection);
    createBrushFromSelectionButton.style("color", "#B0B0B0"); // Gray text
    createBrushFromSelectionButton.style("background-color", "#000000"); // Black background

    // Hue Cycle button
    hueCycleButton = createButton("Hue Cycle");
    hueCycleButton.position(toolboxX, buttonYStart + 5 * buttonSpacing);
    hueCycleButton.mousePressed(toggleHueCycling);
    hueCycleButton.style("color", "#B0B0B0"); // Gray text
    hueCycleButton.style("background-color", "#000000"); // Black background

    // Lightness Cycle button
    lightnessCycleButton = createButton("Lightness Cycle");
    lightnessCycleButton.position(toolboxX, buttonYStart + 6 * buttonSpacing);
    lightnessCycleButton.mousePressed(toggleLightnessCycling);
    lightnessCycleButton.style("color", "#B0B0B0"); // Gray text
    lightnessCycleButton.style("background-color", "#000000"); // Black background

    // Sliders
    brushSize = createSlider(10, 1000, 50);
    brushSize.position(toolboxX, buttonYStart + 7 * buttonSpacing);
    brushOpacity = createSlider(0, 255, 255); // Min: 0, Max: 255, Default: 255
    brushOpacity.position(toolboxX, buttonYStart + 8 * buttonSpacing);
    hueCycleSpeedSlider = createSlider(1, 20, 5); // Min: 1, Max: 20, Default: 5
    hueCycleSpeedSlider.position(toolboxX, buttonYStart + 9 * buttonSpacing);
    brushSpacingSlider = createSlider(0, 50, 0); // Min: 0 (continuous), Max: 50 (mosaic-like), Default: 0
    brushSpacingSlider.position(toolboxX, buttonYStart + 10 * buttonSpacing);
    lightnessAmplitudeSlider = createSlider(0, 50, 25); // Min: 0, Max: 50, Default: 25 (percentage of lightness change)
    lightnessAmplitudeSlider.position(toolboxX, buttonYStart + 11 * buttonSpacing);
    lightnessCycleSpeedSlider = createSlider(1, 20, 5); // Min: 1, Max: 20, Default: 5 (degrees per frame)
    lightnessCycleSpeedSlider.position(toolboxX, buttonYStart + 12 * buttonSpacing);

    // Create tiny color brush buttons in the black area
    for (let i = 0; i < colorBrushes.length; i++) {
      createColorBrushButton(i);
    }

    // Create regular brush buttons, positioned below the color brushes
    for (let i = 0; i < 21; i++) {
      createBrushButton(i);
    }
  } catch (e) {
    console.error("Error in setup:", e);
  }
}

function toggleSelectionMode() {
  selectionMode = !selectionMode;
  if (!selectionMode) {
    // Reset selection when exiting selection mode
    selectionStart = null;
    selectionEnd = null;
  }
}

function toggleHueCycling() {
  hueCycling = !hueCycling;
  if (hueCycling) {
    hueAngle = 0; // Reset hue angle when enabling hue-cycling
  } else {
    // When turning off hue-cycling, reset the stopped state
    hueCycleStopped = false;
  }
}

function toggleHueCycleStop() {
  if (hueCycling) { // Only toggle stop if hue-cycling is active
    hueCycleStopped = !hueCycleStopped;
  }
}

function toggleLightnessCycling() {
  lightnessCycling = !lightnessCycling;
  if (lightnessCycling) {
    lightnessAngle = 0; // Reset lightness angle when enabling lightness-cycling
  }
}

function createBrushFromSelection() {
  try {
    if (selectionStart && selectionEnd) {
      // Adjust selection coordinates to account for the canvas offset
      let adjustedStartX = selectionStart.x - canvasXOffset;
      let adjustedEndX = selectionEnd.x - canvasXOffset;
      let x = min(adjustedStartX, adjustedEndX);
      let y = min(selectionStart.y, selectionEnd.y);
      let w = abs(adjustedStartX - adjustedEndX);
      let h = abs(selectionStart.y - selectionEnd.y);

      // Ensure the selection has valid dimensions
      if (w <= 0 || h <= 0) {
        console.log("Invalid selection dimensions: width =", w, ", height =", h);
        return;
      }

      // Create a new graphics object for the brush
      let newBrush = createGraphics(w, h);
      newBrush.image(masterpiece, 0, 0, w, h, x, y, w, h);

      // Add the new brush to the brushes array
      brushes.push(newBrush);
      let newIndex = brushes.length - 1;

      // Clear the brushPanelLayer and redraw all brush buttons
      brushPanelLayer.clear();
      // Filter out invalid brushes before redrawing
      brushes = brushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
      colorBrushes = colorBrushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
      for (let i = 0; i < colorBrushes.length; i++) {
        createColorBrushButton(i);
      }
      for (let i = 0; i < brushes.length; i++) {
        createBrushButton(i);
      }

      // Set the new brush as the current brush
      currentBrush = brushes[newIndex];
      if (!currentBrush || typeof currentBrush.width === 'undefined') {
        console.log("New brush is invalid; reverting to default brush.");
        currentBrush = brushes[0]; // Fallback to the first brush if the new one is invalid
      }

      // Exit selection mode
      selectionMode = false;
      selectionStart = null;
      selectionEnd = null;
    } else {
      console.log("No valid selection made.");
    }
  } catch (e) {
    console.error("Error in createBrushFromSelection:", e);
  }
}

function newBrushes() {
  try {
    brushes = [];
    doEstampas();
    for (let i = 0; i < 21; i++) {
      if (estampas[i]) {
        brushes[i] = estampas[i];
      } else {
        console.warn(`estampas[${i}] is undefined`);
      }
    }
    // Clear the brushPanelLayer and redraw all brush buttons
    brushPanelLayer.clear();
    // Filter out invalid brushes
    brushes = brushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
    colorBrushes = colorBrushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
    for (let i = 0; i < colorBrushes.length; i++) {
      createColorBrushButton(i);
    }
    for (let i = 0; i < brushes.length; i++) {
      createBrushButton(i);
    }
  } catch (e) {
    console.error("Error in newBrushes:", e);
  }
}

function createColorBrushButton(index) {
  try {
    let button = createButton("");
    // Position the tiny color brushes in the black area (above the regular brushes)
    let toolboxX = 10;
    let colorBrushButtonSize = 20; // Tiny size for color brushes (20x20)
    let colorBrushesPerRow = 6; // 6 brushes per row (4 rows for 24 colors)
    let colorBrushYStart = 10 + 13 * 40; // Start below the sliders (13 elements: 7 buttons + 6 sliders, each 40 pixels apart)
    let pos = createVector(
      toolboxX + (index % colorBrushesPerRow) * (colorBrushButtonSize + 5),
      colorBrushYStart + Math.floor(index / colorBrushesPerRow) * (colorBrushButtonSize + 5)
    );
    button.mousePressed(() => {
      if (colorBrushes[index] && typeof colorBrushes[index].width !== 'undefined') {
        currentBrush = colorBrushes[index];
      } else {
        console.log("Cannot select color brush at index", index, "- brush is invalid.");
        currentBrush = brushes[0]; // Fallback to the first brush
      }
    });
    button.position(pos.x, pos.y);
    button.size(colorBrushButtonSize, colorBrushButtonSize);
    button.style("background-color", "transparent");

    // Draw the color brush preview on the brushPanelLayer
    let brush = colorBrushes[index];
    if (brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined') {
      brushPanelLayer.push();
      brushPanelLayer.translate(pos.x + colorBrushButtonSize / 2, pos.y + colorBrushButtonSize / 2); // Center the image in the button
      brushPanelLayer.imageMode(CENTER);
      let scaleFactor = min(colorBrushButtonSize / brush.width, colorBrushButtonSize / brush.height); // Maintain aspect ratio
      let scaledWidth = brush.width * scaleFactor;
      let scaledHeight = brush.height * scaleFactor;
      brushPanelLayer.image(brush, 0, 0, scaledWidth, scaledHeight);
      brushPanelLayer.pop();
    } else {
      console.log("Skipping invalid color brush at index", index);
    }
  } catch (e) {
    console.error("Error in createColorBrushButton:", e);
  }
}

function createBrushButton(index) {
  try {
    let button = createButton("");
    // Position the regular brush buttons below the color brushes
    let toolboxX = 10;
    let brushButtonSize = 50; // Regular size for brushes (50x50)
    let brushesPerRow = 3; // 3 brushes per row
    let colorBrushYStart = 10 + 13 * 40; // Start position of color brushes
    let colorBrushHeight = 4 * (20 + 5); // Height of color brush area (4 rows, 20px each + 5px spacing)
    let brushYStart = colorBrushYStart + colorBrushHeight + 10; // Start below the color brushes with a 10px gap
    let pos = createVector(
      toolboxX + (index % brushesPerRow) * (brushButtonSize + 10),
      brushYStart + Math.floor(index / brushesPerRow) * (brushButtonSize + 10)
    );
    button.mousePressed(() => {
      if (brushes[index] && typeof brushes[index].width !== 'undefined') {
        currentBrush = brushes[index];
      } else {
        console.log("Cannot select brush at index", index, "- brush is invalid.");
        currentBrush = brushes[0]; // Fallback to the first brush
      }
    });
    button.position(pos.x, pos.y);
    button.size(brushButtonSize, brushButtonSize);
    button.style("background-color", "transparent");

    // Draw the brush preview on the brushPanelLayer
    let brush = brushes[index];
    if (brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined') {
      brushPanelLayer.push();
      brushPanelLayer.translate(pos.x + brushButtonSize / 2, pos.y + brushButtonSize / 2); // Center the image in the button
      brushPanelLayer.imageMode(CENTER);
      let scaleFactor = min(brushButtonSize / brush.width, brushButtonSize / brush.height); // Maintain aspect ratio
      let scaledWidth = brush.width * scaleFactor;
      let scaledHeight = brush.height * scaleFactor;
      brushPanelLayer.image(brush, 0, 0, scaledWidth, scaledHeight);
      brushPanelLayer.pop();
    } else {
      console.log("Skipping invalid brush at index", index);
    }
  } catch (e) {
    console.error("Error in createBrushButton:", e);
  }
}

function saveImage() {
  try {
    save(masterpiece, "png");
  } catch (e) {
    console.error("Error in saveImage:", e);
  }
}

function clearCanvas() {
  try {
    masterpiece.background(230, 200, 170);
    // Clear the brushPanelLayer and redraw all brush buttons
    brushPanelLayer.clear();
    // Filter out invalid brushes
    brushes = brushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
    colorBrushes = colorBrushes.filter(brush => brush && typeof brush.width !== 'undefined' && typeof brush.height !== 'undefined');
    for (let i = 0; i < colorBrushes.length; i++) {
      createColorBrushButton(i);
    }
    for (let i = 0; i < brushes.length; i++) {
      createBrushButton(i);
    }
  } catch (e) {
    console.error("Error in clearCanvas:", e);
  }
}

function mousePressed() {
  try {
    if (selectionMode && mouseX >= canvasXOffset) {
      selectionStart = createVector(mouseX, mouseY);
      selectionEnd = null;
    } else if (mouseX >= canvasXOffset) {
      // Reset last draw position and paint time when starting a new stroke
      lastDrawPos = createVector(mouseX, mouseY);
      accumulatedDistance = 0;
      lastPaintTime = millis();
      // Draw the first brush stroke immediately
      drawBrushStroke(mouseX, mouseY);
    }
  } catch (e) {
    console.error("Error in mousePressed:", e);
  }
}

function mouseDragged() {
  try {
    if (selectionMode && mouseX >= canvasXOffset) {
      selectionEnd = createVector(mouseX, mouseY);
    } else if (mouseX >= canvasXOffset) {
      // Calculate the distance moved since the last draw
      let currentPos = createVector(mouseX, mouseY);
      if (lastDrawPos) {
        let distance = dist(lastDrawPos.x, lastDrawPos.y, currentPos.x, currentPos.y);
        accumulatedDistance += distance;

        // Get the spacing value from the slider, ensure it's at least 1 to avoid infinite loops
        let spacing = max(1, brushSpacingSlider.value());

        // Skip if the distance is too small to avoid excessive iterations
        if (distance < 0.1) {
          lastDrawPos = currentPos;
          return;
        }

        // Draw brush strokes if the accumulated distance exceeds the spacing
        let iterationCount = 0;
        const maxIterations = 100; // Prevent infinite loops
        while (accumulatedDistance >= spacing && iterationCount < maxIterations) {
          // Interpolate between the last position and the current position
          let t = spacing / distance;
          if (t > 1) t = 1; // Clamp t to avoid overshooting
          let interpolatedX = lerp(lastDrawPos.x, currentPos.x, t);
          let interpolatedY = lerp(lastDrawPos.y, currentPos.y, t);
          drawBrushStroke(interpolatedX, interpolatedY);

          // Update the last draw position and paint time
          lastDrawPos = createVector(interpolatedX, interpolatedY);
          lastPaintTime = millis();
          accumulatedDistance -= spacing;

          // Recalculate the remaining distance to the current position
          distance = dist(lastDrawPos.x, lastDrawPos.y, currentPos.x, currentPos.y);
          iterationCount++;
        }

        // If the loop was exited due to max iterations, reset accumulated distance to avoid accumulation
        if (iterationCount >= maxIterations) {
          accumulatedDistance = 0;
        }

        // Update the last draw position to the current position
        lastDrawPos = currentPos;
      } else {
        lastDrawPos = currentPos;
        lastPaintTime = millis();
        drawBrushStroke(mouseX, mouseY);
      }
    }
  } catch (e) {
    console.error("Error in mouseDragged:", e);
  }
}

function mouseReleased() {
  try {
    // Reset the last draw position and paint time when the mouse is released
    lastDrawPos = null;
    accumulatedDistance = 0;
    lastPaintTime = 0;
  } catch (e) {
    console.error("Error in mouseReleased:", e);
  }
}

// Helper function to draw a single brush stroke at the given position
function drawBrushStroke(x, y) {
  try {
    if (!currentBrush) {
      console.error("currentBrush is undefined");
      return;
    }
    if (typeof currentBrush.width === 'undefined' || typeof currentBrush.height === 'undefined') {
      console.error("currentBrush dimensions are undefined:", currentBrush);
      return;
    }

    brush = createGraphics(brushSize.value() / 4, brushSize.value() / 4);
    brush.image(currentBrush, 0, 0, brush.width, brush.height);

    // Apply hue-cycling if enabled
    if (hueCycling) {
      // Update hueCycleSpeed from the slider
      hueCycleSpeed = hueCycleSpeedSlider.value();

      // Increment hue angle only if not stopped
      if (!hueCycleStopped) {
        hueAngle = (hueAngle + hueCycleSpeed) % 360;
      }

      // Create a temporary graphics object to apply hue-cycling
      let hueCycledBrush = createGraphics(brush.width, brush.height);
      hueCycledBrush.loadPixels();
      brush.loadPixels();

      for (let px = 0; px < brush.width; px++) {
        for (let py = 0; py < brush.height; py++) {
          let idx = 4 * (py * brush.width + px);
          let r = brush.pixels[idx];
          let g = brush.pixels[idx + 1];
          let b = brush.pixels[idx + 2];
          let a = brush.pixels[idx + 3];

          // Skip transparent pixels
          if (a === 0) continue;

          // Convert RGB to HSL
          let [h, s, l] = rgbToHsl(r, g, b);
          // Apply the current hue angle (frozen if hueCycleStopped is true)
          h = hueAngle;
          // Convert back to RGB
          let [newR, newG, newB] = hslToRgb(h, s, l);

          // Set the new color in the hue-cycled brush
          hueCycledBrush.pixels[idx] = newR;
          hueCycledBrush.pixels[idx + 1] = newG;
          hueCycledBrush.pixels[idx + 2] = newB;
          hueCycledBrush.pixels[idx + 3] = a;
        }
      }
      hueCycledBrush.updatePixels();
      brush = hueCycledBrush; // Use the hue-cycled brush for drawing
    }

    // Apply lightness-cycling if enabled
    if (lightnessCycling) {
      // Update lightnessCycleSpeed from the slider
      lightnessCycleSpeed = lightnessCycleSpeedSlider.value();

      // Increment lightness angle to create the oscillation
      lightnessAngle = (lightnessAngle + lightnessCycleSpeed) % 360;

      // Create a temporary graphics object to apply lightness-cycling
      let lightnessCycledBrush = createGraphics(brush.width, brush.height);
      lightnessCycledBrush.loadPixels();
      brush.loadPixels();

      for (let px = 0; px < brush.width; px++) {
        for (let py = 0; py < brush.height; py++) {
          let idx = 4 * (py * brush.width + px);
          let r = brush.pixels[idx];
          let g = brush.pixels[idx + 1];
          let b = brush.pixels[idx + 2];
          let a = brush.pixels[idx + 3];

          // Skip transparent pixels
          if (a === 0) continue;

          // Convert RGB to HSL
          let [h, s, l] = rgbToHsl(r, g, b);

          // Apply lightness oscillation using a sine wave
          let amplitude = lightnessAmplitudeSlider.value(); // Amplitude in percentage (0-50)
          let lightnessOffset = amplitude * sin(radians(lightnessAngle)); // Oscillate between -amplitude and +amplitude
          l = constrain(l + lightnessOffset, 0, 100); // Adjust lightness and keep it in range [0, 100]

          // Convert back to RGB
          let [newR, newG, newB] = hslToRgb(h, s, l);

          // Set the new color in the lightness-cycled brush
          lightnessCycledBrush.pixels[idx] = newR;
          lightnessCycledBrush.pixels[idx + 1] = newG;
          lightnessCycledBrush.pixels[idx + 2] = newB;
          lightnessCycledBrush.pixels[idx + 3] = a;
        }
      }
      lightnessCycledBrush.updatePixels();
      brush = lightnessCycledBrush; // Use the lightness-cycled brush for drawing
    }

    // Draw the brush stroke with opacity
    masterpiece.push();
    masterpiece.tint(255, brushOpacity.value()); // Apply opacity using tint
    masterpiece.translate(x - canvasXOffset, y);
    masterpiece.rotate(radians(brushRotation));
    masterpiece.image(brush, 0, 0);
    masterpiece.pop();
  } catch (e) {
    console.error("Error in drawBrushStroke:", e);
  }
}

// Helper functions for hue-cycling
function rgbToHsl(r, g, b) {
  try {
    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // Achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100]; // Hue in degrees (0-360), saturation and lightness in percentage (0-100)
  } catch (e) {
    console.error("Error in rgbToHsl:", e);
    return [0, 0, 0]; // Fallback
  }
}

function hslToRgb(h, s, l) {
  try {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      let hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  } catch (e) {
    console.error("Error in hslToRgb:", e);
    return [0, 0, 0]; // Fallback
  }
}

function draw() {
  try {
    // Update brush size and rotation based on key states
    if (growKeyPressed) {
      brushSize.value(brushSize.value() + brushSizeGrowth);
    }
    if (decreaseKeyPressed) {
      brushSize.value(brushSize.value() - brushSizeGrowth);
      if (brushSize.value() < 0.5) {
        brushSize.value(0.5);
      }
    }
    if (rotateClockwiseKeyPressed) {
      brushRotation += 1;
    }
    if (rotateCounterClockwiseKeyPressed) {
      brushRotation -= 1;
    }

    // If the mouse/stylus is pressed and on the canvas, continue painting at the current position
    if (mouseIsPressed && mouseX >= canvasXOffset && !selectionMode) {
      // Get the spacing value from the slider, ensure it's at least 1
      let spacing = max(1, brushSpacingSlider.value());

      // Check if enough time has passed since the last paint (to respect spacing when stationary)
      let currentTime = millis();
      let timeSinceLastPaint = currentTime - lastPaintTime;

      // Convert spacing (pixels) to a time interval (milliseconds) for stationary painting
      // We'll use a rough estimate: 1 pixel of spacing = 10ms of delay
      let spacingInterval = spacing * 10;

      if (timeSinceLastPaint >= spacingInterval) {
        drawBrushStroke(mouseX, mouseY);
        lastPaintTime = currentTime;
      }
    }

    // Clear the entire canvas with a gray background for non-toolbox areas
    background(180, 180, 180);

    // Draw the toolbox area as a black rectangle
    fill(0); // Black background for the toolbox
    noStroke();
    rect(0, 0, toolboxWidth, height);

    // Draw the canvas (masterpiece) to the right of the toolbox
    image(masterpiece, canvasXOffset, 0);

    // Draw labels for the sliders in gray, moved 9 pixels up (5 + 4)
    let toolboxX = 10;
    let buttonYStart = 10;
    let buttonSpacing = 40;
    fill(176, 176, 176); // Gray text (#B0B0B0)
    textSize(12);
    textAlign(LEFT, CENTER);
    text("Brush Size", toolboxX, buttonYStart + 7 * buttonSpacing + 1);
    text("Opacity", toolboxX, buttonYStart + 8 * buttonSpacing + 1);
    text("Hue Speed", toolboxX, buttonYStart + 9 * buttonSpacing + 1);
    text("Spacing", toolboxX, buttonYStart + 10 * buttonSpacing + 1);
    text("Lightness Amp", toolboxX, buttonYStart + 11 * buttonSpacing + 1);
    text("Lightness Speed", toolboxX, buttonYStart + 12 * buttonSpacing + 1);

    if (selectionMode) {
      // Draw the selection rectangle if in selection mode
      if (selectionStart && selectionEnd) {
        noFill();
        stroke(0, 255, 0); // Green outline for the selection
        strokeWeight(2);
        rect(
          min(selectionStart.x, selectionEnd.x),
          min(selectionStart.y, selectionEnd.y),
          abs(selectionStart.x - selectionEnd.x),
          abs(selectionStart.y - selectionEnd.y)
        );
      }
    }

    // Draw the UI layer (brushPanelLayer)
    image(brushPanelLayer, 0, 0);
  } catch (e) {
    console.error("Error in draw:", e);
  }
}

function keyPressed() {
  try {
    if (key === "g" || key === "G") {
      growKeyPressed = true;
    }
    if (key === "d" || key === "D") {
      decreaseKeyPressed = true;
    }
    if (key === "r" || key === "R") {
      rotateClockwiseKeyPressed = true;
    }
    if (key === "e" || key === "E") {
      rotateCounterClockwiseKeyPressed = true;
    }
    if (key === "s" || key === "S") {
      saveImage();
    }
    if (key === "h" || key === "H") { // Toggle selection mode with H key
      toggleSelectionMode();
    }
    if (key === "j" || key === "J") { // Create brush from selection with J key
      createBrushFromSelection();
    }
    if (key === "c" || key === "C") { // Toggle hue-cycling with C key
      toggleHueCycling();
    }
    if (key === "v" || key === "V") { // Toggle hue cycle stop with V key
      toggleHueCycleStop();
    }
    if (key === "l" || key === "L") { // Toggle lightness-cycling with L key
      toggleLightnessCycling();
    }
  } catch (e) {
    console.error("Error in keyPressed:", e);
  }
}

function keyReleased() {
  try {
    if (key === "g" || key === "G") {
      growKeyPressed = false;
    }
    if (key === "d" || key === "D") {
      decreaseKeyPressed = false;
    }
    if (key === "r" || key === "R") {
      rotateClockwiseKeyPressed = false;
    }
    if (key === "e" || key === "E") {
      rotateCounterClockwiseKeyPressed = false;
    }
  } catch (e) {
    console.error("Error in keyReleased:", e);
  }
}