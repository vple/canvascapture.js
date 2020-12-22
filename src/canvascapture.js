export class CanvasCapture {
  #capturing = false;

	constructor() {
  }

  start() {
    this.#capturing = true;
  }

  stop() {
    this.#capturing = false;
  }

  capture(canvas) {
    if (!this.#capturing) { 
      return; 
    }


  }

  isCapturing() {
    return this.#capturing;
  }
}