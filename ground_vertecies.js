function makeGroundGrid() {
	//==============================================================================
	// Create a list of vertices that create a large grid of lines in the x,y plane
	// centered at x=y=z=0.  Draw this shape using the GL_LINES primitive.

	var xcount = 1000;			// # of lines to draw in x,y to make the grid.
	var ycount = 1000;
	var xymax = 500.0;			// grid size; extends to cover +/-xymax in x and y.
	var xColr = new Float32Array([1.0, 1.0, 0.3]);	// bright yellow
	var yColr = new Float32Array([0.5, 1.0, 0.5]);	// bright green.

	// Create an (global) array to hold this ground-plane's vertices:
	var gndVerts = new Float32Array(floatsPerVertex * 2 * (xcount + ycount));
	// draw a grid made of xcount+ycount lines; 2 vertices per line.

	var xgap = xymax / (xcount - 1);		// HALF-spacing between lines in x,y;
	var ygap = xymax / (ycount - 1);		// (why half? because v==(0line number/2))

	// First, step thru x values as we make vertical lines of constant-x:
	for (v = 0, j = 0; v < 2 * xcount; v++, j += floatsPerVertex) {
		if (v % 2 == 0) {	// put even-numbered vertices at (xnow, -xymax, 0)
			gndVerts[j] = -xymax + (v) * xgap;	// x
			gndVerts[j + 1] = -xymax;								// y
			gndVerts[j + 2] = 0.0;									// z
			gndVerts[j + 3] = 1.0;									// w.
		}
		else {				// put odd-numbered vertices at (xnow, +xymax, 0).
			gndVerts[j] = -xymax + (v - 1) * xgap;	// x
			gndVerts[j + 1] = xymax;								// y
			gndVerts[j + 2] = 0.0;									// z
			gndVerts[j + 3] = 1.0;									// w.
		}
		gndVerts[j + 4] = xColr[0];			// red
		gndVerts[j + 5] = xColr[1];			// grn
		gndVerts[j + 6] = xColr[2];			// blu
	}
	// Second, step thru y values as wqe make horizontal lines of constant-y:
	// (don't re-initialize j--we're adding more vertices to the array)
	for (v = 0; v < 2 * ycount; v++, j += floatsPerVertex) {
		if (v % 2 == 0) {		// put even-numbered vertices at (-xymax, ynow, 0)
			gndVerts[j] = -xymax;								// x
			gndVerts[j + 1] = -xymax + (v) * ygap;	// y
			gndVerts[j + 2] = 0.0;									// z
			gndVerts[j + 3] = 1.0;									// w.
		}
		else {					// put odd-numbered vertices at (+xymax, ynow, 0).
			gndVerts[j] = xymax;								// x
			gndVerts[j + 1] = -xymax + (v - 1) * ygap;	// y
			gndVerts[j + 2] = 0.0;									// z
			gndVerts[j + 3] = 1.0;									// w.
		}
		gndVerts[j + 4] = yColr[0];			// red
		gndVerts[j + 5] = yColr[1];			// grn
		gndVerts[j + 6] = yColr[2];			// blu
	}
  return gndVerts
}