//3456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_
// (JT: why the numbers? counts columns, helps me keep 80-char-wide listings)
//
// Chapter 5: ColoredTriangle.js (c) 2012 matsuda  AND
// Chapter 4: RotatingTriangle_withButtons.js (c) 2012 matsuda
// became:
//
// BasicShapes.js  MODIFIED for EECS 351-1, 
//									Northwestern Univ. Jack Tumblin
//		--converted from 2D to 4D (x,y,z,w) vertices
//		--extend to other attributes: color, surface normal, etc.
//		--demonstrate how to keep & use MULTIPLE colored shapes in just one
//			Vertex Buffer Object(VBO). 
//		--create several canonical 3D shapes borrowed from 'GLUT' library:
//		--Demonstrate how to make a 'stepped spiral' tri-strip,  and use it
//			to build a cylinder, sphere, and torus.
//
// Vertex shader program----------------------------------
var VSHADER_SOURCE =
	'uniform mat4 u_MvpMatrix;\n' +
	'uniform mat4 u_ViewMatrix;\n' +
	'uniform mat4 u_ProjMatrix;\n' +
	'attribute vec4 a_Position;\n' +
	'attribute vec4 a_Color;\n' +
	'varying vec4 v_Color;\n' +
	'void main() {\n' +
	'  gl_Position = u_MvpMatrix * a_Position;\n' +
	'  gl_PointSize = 10.0;\n' +
	'  v_Color = a_Color;\n' +
	'}\n';

// Fragment shader program----------------------------------
var FSHADER_SOURCE =
	//  '#ifdef GL_ES\n' +
	'precision mediump float;\n' +
	//  '#endif GL_ES\n' +
	'varying vec4 v_Color;\n' +
	'void main() {\n' +
	'  gl_FragColor = v_Color;\n' +
	'}\n';

// Global Variables
var ANGLE_STEP = 45.0;		// Rotation angle rate (degrees/second)
var floatsPerVertex = 7;	// # of Float32Array elements used for each vertex
// (x,y,z,w)position + (r,g,b)color
// Later, see if you can add:
// (x,y,z) surface normal + (tx,ty) texture addr.
var canvas;
var gl;

var g_node_count;
var gndStart;
var frog_body_start;
var frog_leg_start;
var frog_eye_start
var car_start;
var wheel_start;

var gndVerts;
var frog_body_verts;
var frog_leg_verts;
var frog_eye_verts;
var car_verts;
var wheel_verts;

var g_u_MvpMatrix;
var g_u_ViewMatrix;
var g_u_ProjMatrix;

var g_modelMatrix;
var g_viewMatrix;
var g_projMatrix;
var g_mvpMatrix;

var g_eye_point_v = [5.0,0.0,1.0];
var g_up_v = [0.0,0.0,1.0];
var g_theat = Math.PI;
var g_aim_z = 0.0;
var g_move_vel = 0.1;
var g_turn_v = Math.PI / 90;
var g_tilt_v = 0.01;

var g_currentAngle = 0;

var g_angle_slider = 20;
var g_frog_rate = 45.0;
var g_frog_leg_angle_front = 0;
var g_frog_leg_angle_back = 0;
var g_frog_height = 0;
var g_frog_pos = 0;


var g_steer_max_angle = 40;
var g_steer_rate = 40;
var g_steer_angle = 0;

var g_wheelspeed_max_rate = 1000;
var g_wheelspeed_rate = 100;
var g_wheel_angle = 0;


function main() {
	//==============================================================================
	// Retrieve <canvas> element
	canvas = document.getElementById('webgl');

	// Get the rendering context for WebGL
	gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('Failed to get the rendering context for WebGL');
		return;
	}

	// Initialize shaders
	if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
		console.log('Failed to intialize shaders.');
		return;
	}

	// 
	g_node_count = initVertexBuffer();
	if (g_node_count < 0) {
		console.log('Failed to set the vertex information');
		return;
	}

	// Specify the color for clearing <canvas>
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	// NEW!! Enable 3D depth-test when drawing: don't over-draw at any pixel 
	// unless the new Z value is closer to the eye than the old one..
	//	gl.depthFunc(gl.LESS);			 // WebGL default setting: (default)
	gl.enable(gl.DEPTH_TEST);


	// Get the storage locations of u_ModelMatrix, u_ViewMatrix, and u_ProjMatrix
	g_u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
	if (!g_u_MvpMatrix) {
		console.log('Failed to Get the storage locations of u_ModelMatrix, u_ViewMatrix, and/or u_ProjMatrix');
		return;
	}

	g_modelMatrix = new Matrix4(); // The model matrix
	g_viewMatrix = new Matrix4();  // The view matrix
	g_projMatrix = new Matrix4();  // The projection matrix
	g_mvpMatrix = new Matrix4();  // The projection matrix

	// Calculate the view matrix and the projection matrix
	//modelMatrix.setTranslate(0.75, 0, 0);  // Translate 0.75 units along the positive x-axis
	

	//-----------------  
	// Start drawing: create 'tick' variable whose value is this function:
	var tick = function () {
		animate();  // Update the rotation angle
		
		drawAll();   // Draw shapes

		// report current angle on console
		//console.log('currentAngle=',currentAngle);
		requestAnimationFrame(tick, canvas);
		// Request that the browser re-draw the webpage
	};
	tick();							// start (and continue) animation: draw current image

	
	// resize the canvas to fill browser window dynamically
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();

	//MOUSE:
	window.addEventListener("mousedown", myMouseDown);
	window.addEventListener("mousemove", myMouseMove);
	window.addEventListener("mouseup", myMouseUp);

	//KEY:
	window.addEventListener("keydown", myKeyDown, false);
	window.addEventListener("keyup", myKeyUp, false);
	

}

function initVertexBuffer() {
	//==============================================================================
	// Create one giant vertex buffer object (VBO) that holds all vertices for all
	// shapes.


	gndVerts = makeGroundGrid();				// create, fill the gndVerts array

	frog_body_verts = make_frog_body_vertecies();
	frog_leg_verts = make_frog_leg_vertecies();
	frog_eye_verts = make_frog_eye_vertecies();

  car_verts = get_car_vertecies()
  wheel_verts = get_wheel_vertecies(100, 100, 8)

	
	// how many floats total needed to store all shapes?
	var mySiz = (
		+ gndVerts.length 
		+ frog_body_verts.length 
		+ frog_leg_verts.length 
		+ frog_eye_verts.length
		+ car_verts.length
		+ wheel_verts.length
		);

	// How many vertices total?
	var nn = mySiz / floatsPerVertex;
	console.log('nn is', nn, 'mySiz is', mySiz, 'floatsPerVertex is', floatsPerVertex);
	// Copy all shapes into one big Float32 array:
	var colorShapes = new Float32Array(mySiz);
	// Copy them:  remember where to start for each shape:
	gndStart = 0;						// next we'll store the ground-plane;
	for (i = 0,j = 0; j < gndVerts.length; i++, j++) {
		colorShapes[i] = gndVerts[j];
	}
	frog_body_start = i;						// next we'll store the ground-plane;
	for (j = 0; j < frog_body_verts.length; i++, j++) {
		colorShapes[i] = frog_body_verts[j];
	}
	frog_leg_start = i;						// next we'll store the ground-plane;
	for (j = 0; j < frog_leg_verts.length; i++, j++) {
		colorShapes[i] = frog_leg_verts[j];
	}
	frog_eye_start = i;						// next we'll store the ground-plane;
	for (j = 0; j < frog_eye_verts.length; i++, j++) {
		colorShapes[i] = frog_eye_verts[j];
	}
	car_start = i;						// next we'll store the ground-plane;
	for (j = 0; j < car_verts.length; i++, j++) {
		colorShapes[i] = car_verts[j];
	}
	wheel_start = i;						// next we'll store the ground-plane;
	for (j = 0; j < wheel_verts.length; i++, j++) {
		colorShapes[i] = wheel_verts[j];
	}
	// Create a buffer object on the graphics hardware:
	var shapeBufferHandle = gl.createBuffer();
	if (!shapeBufferHandle) {
		console.log('Failed to create the shape buffer object');
		return false;
	}

	// Bind the the buffer object to target:
	gl.bindBuffer(gl.ARRAY_BUFFER, shapeBufferHandle);
	// Transfer data from Javascript array colorShapes to Graphics system VBO
	// (Use sparingly--may be slow if you transfer large shapes stored in files)
	gl.bufferData(gl.ARRAY_BUFFER, colorShapes, gl.STATIC_DRAW);

	//Get graphics system's handle for our Vertex Shader's position-input variable: 
	var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
	if (a_Position < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
	}

	var FSIZE = colorShapes.BYTES_PER_ELEMENT; // how many bytes per stored value?

	// Use handle to specify how to retrieve **POSITION** data from our VBO:
	gl.vertexAttribPointer(
		a_Position, 	// choose Vertex Shader attribute to fill with data
		4, 						// how many values? 1,2,3 or 4.  (we're using x,y,z,w)
		gl.FLOAT, 		// data type for each value: usually gl.FLOAT
		false, 				// did we supply fixed-point data AND it needs normalizing?
		FSIZE * floatsPerVertex, // Stride -- how many bytes used to store each vertex?
		// (x,y,z,w, r,g,b) * bytes/value
		0);						// Offset -- now many bytes from START of buffer to the
	// value we will actually use?
	gl.enableVertexAttribArray(a_Position);
	// Enable assignment of vertex buffer object's position data

	// Get graphics system's handle for our Vertex Shader's color-input variable;
	var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
	if (a_Color < 0) {
		console.log('Failed to get the storage location of a_Color');
		return -1;
	}
	// Use handle to specify how to retrieve **COLOR** data from our VBO:
	gl.vertexAttribPointer(
		a_Color, 				// choose Vertex Shader attribute to fill with data
		3, 							// how many values? 1,2,3 or 4. (we're using R,G,B)
		gl.FLOAT, 			// data type for each value: usually gl.FLOAT
		false, 					// did we supply fixed-point data AND it needs normalizing?
		FSIZE * 7, 			// Stride -- how many bytes used to store each vertex?
		// (x,y,z,w, r,g,b) * bytes/value
		FSIZE * 4);			// Offset -- how many bytes from START of buffer to the
	// value we will actually use?  Need to skip over x,y,z,w

	gl.enableVertexAttribArray(a_Color);
	// Enable assignment of vertex buffer object's position data

	//--------------------------------DONE!
	// Unbind the buffer object 
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	return nn;
}



function setMVPMatrix() {	
	g_mvpMatrix.set(g_projMatrix).multiply(g_viewMatrix).multiply(g_modelMatrix);
	gl.uniformMatrix4fv(g_u_MvpMatrix, false, g_mvpMatrix.elements);
}

function drawAll() {
	//==============================================================================
	// Clear <canvas>  colors AND the depth buffer
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	var aspect = gl.canvas.width / 2 /gl.canvas.height
	var angle = 35.0
	var aim = calcAimPoint();
	g_viewMatrix.setLookAt(
		g_eye_point_v[0],
		g_eye_point_v[1],
		g_eye_point_v[2],
		aim[0],
		aim[1],
		aim[2],
		g_up_v[0],
		g_up_v[1],
		g_up_v[2]);
	
	g_projMatrix.setPerspective(angle, aspect ,1.0, 100.0);
	gl.viewport(0, 0, gl.canvas.width / 2, gl.canvas.height);
	drawShapes();   // Draw shapes
	
	var width = 3.0
	var height = width / aspect
	g_projMatrix.setOrtho(-width/2,width/2, -height/2, height/2, 0.0, 100.0)
	gl.viewport(gl.canvas.width / 2, 0, gl.canvas.width / 2, gl.canvas.height);
	drawShapes();   // Draw shapes
}

function calcAimPoint() {
	return [
		g_eye_point_v[0] + Math.cos(g_theat),
		g_eye_point_v[1] + Math.sin(g_theat),
		g_eye_point_v[2] + g_aim_z]
}

function drawShapes() {
	g_modelMatrix.setIdentity();    // DEFINE 'world-space' coords.

	//FROG
	pushMatrix(g_modelMatrix)
		g_modelMatrix.rotate(g_frog_pos, 0, 0, 1)
		g_modelMatrix.translate(1.4, 0, 0.25)
		g_modelMatrix.rotate(90, 1, 0, 0)
		g_modelMatrix.rotate(90, 0, 1, 0)
		g_modelMatrix.scale(0.2, 0.2, 0.2)
		g_modelMatrix.translate(0, g_frog_height, 0)
		drawFrog(g_frog_leg_angle_front, g_frog_leg_angle_back)
  g_modelMatrix = popMatrix(g_modelMatrix)
	//==============================================================
	
	//CAR
	pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(0,0, 0.1)
	g_modelMatrix.rotate(90,1,0,0)
	g_modelMatrix.rotate(90,0,1,0)
  g_modelMatrix.scale(0.6, 0.6, 0.6)
  drawCar(g_wheel_angle, g_steer_angle)
  g_modelMatrix = popMatrix(g_modelMatrix)
	//==============================================================
	

	//GROUND
	pushMatrix(g_modelMatrix);  // SAVE world drawing coords.
	g_modelMatrix.translate(0.4, -0.4, 0.0);
	g_modelMatrix.scale(0.1, 0.1, 0.1);				// shrink by 10X:
	setMVPMatrix();
	gl.drawArrays(gl.LINES, 								// use this drawing primitive, and
		gndStart / floatsPerVertex,	// start at this vertex number, and
		gndVerts.length / floatsPerVertex);	// draw this many vertices.
	g_modelMatrix = popMatrix();  // RESTORE 'world' drawing coords.
	//===========================================================
}
function drawCar(wheel_rot_angle, wheel_steer_angle) {
  pushMatrix(g_modelMatrix)

  setMVPMatrix()
  gl.drawArrays(gl.TRIANGLES, car_start/floatsPerVertex, car_verts.length / floatsPerVertex);

  //console.log(wheel_steer_angle)
  //TYRE FL
  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(-0.65, 0, -0.1)
  g_modelMatrix.rotate(wheel_steer_angle, 0, 1, 0)
  g_modelMatrix.rotate(wheel_rot_angle, 0, 0, 1)
  s_factor = 0.17
  g_modelMatrix.scale(s_factor, s_factor, s_factor)

	setMVPMatrix()
  gl.drawArrays(gl.TRIANGLE_STRIP, wheel_start/floatsPerVertex, wheel_verts.length / floatsPerVertex);

  g_modelMatrix = popMatrix()


  //TYRE FR
  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(-0.65, 0, 1.1)
  g_modelMatrix.rotate(wheel_steer_angle, 0, 1, 0)
  g_modelMatrix.rotate(180, 0, 1, 0)
  g_modelMatrix.rotate(-wheel_rot_angle, 0, 0, 1)
  s_factor = 0.17
  g_modelMatrix.scale(s_factor, s_factor, s_factor)

	setMVPMatrix()
  gl.drawArrays(gl.TRIANGLE_STRIP, wheel_start/floatsPerVertex, wheel_verts.length / floatsPerVertex);

  g_modelMatrix = popMatrix()


  //TYRE BL
  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(0.6, 0, -0.1)
  g_modelMatrix.rotate(wheel_rot_angle, 0, 0, 1)
  s_factor = 0.18
  g_modelMatrix.scale(s_factor, s_factor, s_factor)

	setMVPMatrix()
  gl.drawArrays(gl.TRIANGLE_STRIP, wheel_start/floatsPerVertex, wheel_verts.length / floatsPerVertex);

  g_modelMatrix = popMatrix()

  //TYRE BR
  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(0.6, 0, 1.1)
  g_modelMatrix.rotate(180, 0, 1, 0)
  g_modelMatrix.rotate(-wheel_rot_angle, 0, 0, 1)
  s_factor = 0.18
  g_modelMatrix.scale(s_factor, s_factor, s_factor)

	setMVPMatrix()
  gl.drawArrays(gl.TRIANGLE_STRIP, wheel_start/floatsPerVertex, wheel_verts.length / floatsPerVertex);

  g_modelMatrix = popMatrix()


  g_modelMatrix = popMatrix()
}

function drawFrog(front_angle, back_angle) {

  setMVPMatrix()
  gl.drawArrays(gl.TRIANGLE_STRIP, frog_body_start/floatsPerVertex, 18);

  gl.drawArrays(gl.TRIANGLE_FAN, frog_body_start/floatsPerVertex + 18, 10);

  gl.drawArrays(gl.TRIANGLE_FAN, frog_body_start/floatsPerVertex + 18 + 10, 10);

  drawFrogLeg(front_angle, back_angle)
  drawFrogEye()
}
function drawOneLeg(leg_angle) {

  //Leg right
  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(-0.7, -0.2, 0)
  g_modelMatrix.rotate(90, 0, 1, 0)
  g_modelMatrix.rotate(leg_angle - 20, 0, 0, 1)
  pushMatrix(g_modelMatrix)
  g_modelMatrix.scale(0.6, 0.3, 0.3)
  g_modelMatrix.translate(-1, 0, 0)
  drawLeg()
  g_modelMatrix = popMatrix()


  g_modelMatrix.translate(-1.2, 0, 0)
  g_modelMatrix.rotate(90, 0, 0, 1)
  g_modelMatrix.rotate(-leg_angle + 30, 0, 0, 1)
  pushMatrix(g_modelMatrix)
  g_modelMatrix.scale(0.6, 0.2, 0.2)
  g_modelMatrix.translate(-1, 0, 0)
  drawLeg()
  g_modelMatrix = popMatrix()


  g_modelMatrix.translate(-1.2, 0, 0)
  g_modelMatrix.rotate(-90, 0, 0, 1)
  g_modelMatrix.rotate(-leg_angle * 0.4, 0, 0, 1)
  pushMatrix(g_modelMatrix)
  g_modelMatrix.scale(0.4, 0.2, 0.2)
  g_modelMatrix.translate(-1, 0, 0)
  drawLeg()
  g_modelMatrix = popMatrix()



  g_modelMatrix = popMatrix()

}
function drawLeg() {
  
  setMVPMatrix()
	gl.drawArrays(gl.TRIANGLE_STRIP,
    frog_leg_start/floatsPerVertex, 18);

  gl.drawArrays(gl.TRIANGLE_FAN,
    frog_leg_start/floatsPerVertex + 18, 10);

  gl.drawArrays(gl.TRIANGLE_FAN,
    frog_leg_start/floatsPerVertex + 18 + 10, 10);
}
function drawFrogLeg(front_angle, back_angle) {
  pushMatrix(g_modelMatrix)

  drawOneLeg(back_angle)
  pushMatrix(g_modelMatrix)
  g_modelMatrix.scale(1, 1, -1)
  drawOneLeg(back_angle)
  g_modelMatrix = popMatrix()



  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(1, 0, 0)
  drawOneLeg(front_angle)
  pushMatrix(g_modelMatrix)
  g_modelMatrix.scale(1, 1, -1)
  drawOneLeg(front_angle)
  g_modelMatrix = popMatrix()

  g_modelMatrix = popMatrix()




  g_modelMatrix = popMatrix()

}
function drawEye() {
  setMVPMatrix()
	gl.drawArrays(gl.TRIANGLE_STRIP,
    frog_eye_start/floatsPerVertex, 18);

  gl.drawArrays(gl.TRIANGLE_FAN,
    frog_eye_start/floatsPerVertex
    + 18, 10);

  gl.drawArrays(gl.TRIANGLE_FAN,
    frog_eye_start/floatsPerVertex + 18 + 10, 10);

  gl.drawArrays(gl.TRIANGLE_FAN,
    frog_eye_start/floatsPerVertex + 18 + 10 + 10, 10);
}
function drawFrogEye(eyeAngle) {
  eyeAngle = eyeAngle | 0


  pushMatrix(g_modelMatrix)


  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(0.65, 0.7, 0.13)
  g_modelMatrix.rotate(10 + eyeAngle, 0, 1, 0)
  g_modelMatrix.scale(0.2, 0.2, 0.2)
  drawEye()
  g_modelMatrix = popMatrix()

  pushMatrix(g_modelMatrix)
  g_modelMatrix.translate(0.65, 0.7, -0.13)
  g_modelMatrix.rotate(-10 + eyeAngle, 0, 1, 0)
  g_modelMatrix.scale(0.2, 0.2, 0.2)
  drawEye()
  g_modelMatrix = popMatrix()

  g_modelMatrix = popMatrix()

}


// Last time that this function was called:  (used for animation timing)
var g_last = Date.now();

function animate() {
	//==============================================================================
	// Calculate the elapsed time
	var now = Date.now();
	var elapsed = now - g_last;
	g_last = now;
	// Update the current rotation angle (adjusted by the elapsed time)
	//  limit the angle to move smoothly between +20 and -85 degrees:
	//  if(angle >  120.0 && ANGLE_STEP > 0) ANGLE_STEP = -ANGLE_STEP;
	//  if(angle < -120.0 && ANGLE_STEP < 0) ANGLE_STEP = -ANGLE_STEP;

	g_currentAngle = g_currentAngle + (ANGLE_STEP * elapsed) / 1000.0;
	g_currentAngle %= 360;


	//CAR
	g_wheel_angle += (g_wheelspeed_rate * elapsed) / 1000.0
  g_wheel_angle %= 360

	//FROG
  g_frog_pos += (g_frog_rate * elapsed) / 1000.0;
  g_frog_pos %= 360

  a = g_frog_pos / 360.0 * Math.PI * 10
  g_frog_leg_angle_back = 10 + g_angle_slider * Math.sin(a)
  g_frog_leg_angle_front = 10 + g_angle_slider * 0.5 * Math.sin(a)
  g_frog_height = (10 + 20 * Math.sin(a)) * 0.01

}

//==================HTML Button Callbacks
function nextShape() {
	shapeNum += 1;
	if (shapeNum >= shapeMax) shapeNum = 0;
}

function spinDown() {
	ANGLE_STEP -= 25;
}


function moreFrogSpeed() {
  //==============================================================================

  g_frog_rate += 10;
}

function lessFrogSpeed() {
  //==============================================================================
  g_frog_rate -= 10;
}

var slider = false

function frogFlexAngle(angle) {
  slider = true
  g_angle_slider = angle
}


function resizeCanvas() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
	drawAll();
}

function myMouseDown(ev) {
};

function myMouseMove(ev) {
};

function myMouseUp(ev) {
};

function myKeyDown(kev) {
	
	var eye_aim = calcAimPoint().map(function(item, index) {
		return (item - g_eye_point_v[index]);
	})
	var direction_fwd = unitify(eye_aim).map(function(item) {
		return item*g_move_vel;
	})
	var direction_side = unitify(cartesian(g_up_v,eye_aim)).map(function(item) {
		return item*g_move_vel;
	})
	
  switch (kev.code) {

    //----------------Arrow keys------------------------
    case "ArrowLeft":
      direction_side.forEach(function(item, index) {
				g_eye_point_v[index] += item;
			})
      break;
    case "ArrowRight":
      direction_side.forEach(function(item, index) {
				g_eye_point_v[index] -= item;
			})
      break;
    case "ArrowUp":
			direction_fwd.forEach(function(item, index) {
				g_eye_point_v[index] += item;
			})
      break;
    case "ArrowDown":
      direction_fwd.forEach(function(item, index) {
				g_eye_point_v[index] -= item;
			})
      break;
		case "KeyO":
      g_up_v.forEach(function(item, index) {
				g_eye_point_v[index] += item*g_move_vel;
			})
      break;
		case "KeyI":
      g_up_v.forEach(function(item, index) {
				g_eye_point_v[index] -= item*g_move_vel;
			})
      break;
		case "KeyA":
      g_theat += g_turn_v;
			g_theat %= (Math.PI*2);
      break;
			case "KeyD":
      g_theat -= g_turn_v;
			g_theat %= (Math.PI*2);
			break;
		case "KeyS":
			g_aim_z -= g_tilt_v
			break;
		case "KeyW":
			g_aim_z += g_tilt_v
      break;
    default:
      break;
  }

	
}

function myKeyUp(kev) {
}

function cartesian(a,b) {
	return [
		a[1]*b[2] - a[2]*b[1],
		a[2]*b[0] - a[0]*b[2],
		a[0]*b[1] - a[1]*b[0],
	]
}
function unitify(a) {
	var len = Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2])
	return [
		a[0]*len,
		a[1]*len,
		a[2]*len
	]
}