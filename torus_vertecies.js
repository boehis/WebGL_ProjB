function makeTorus() {
  //==============================================================================
  // 		Create a torus centered at the origin that circles the z axis.  
  // Terminology: imagine a torus as a flexible, cylinder-shaped bar or rod bent 
  // into a circle around the z-axis. The bent bar's centerline forms a circle
  // entirely in the z=0 plane, centered at the origin, with radius 'rbend'.  The 
  // bent-bar circle begins at (rbend,0,0), increases in +y direction to circle  
  // around the z-axis in counter-clockwise (CCW) direction, consistent with our
  // right-handed coordinate system.
  // 		This bent bar forms a torus because the bar itself has a circular cross-
  // section with radius 'rbar' and angle 'phi'. We measure phi in CCW direction 
  // around the bar's centerline, circling right-handed along the direction 
  // forward from the bar's start at theta=0 towards its end at theta=2PI.
  // 		THUS theta=0, phi=0 selects the torus surface point (rbend+rbar,0,0);
  // a slight increase in phi moves that point in -z direction and a slight
  // increase in theta moves that point in the +y direction.  
  // To construct the torus, begin with the circle at the start of the bar:
  //					xc = rbend + rbar*cos(phi); 
  //					yc = 0; 
  //					zc = -rbar*sin(phi);			(note negative sin(); right-handed phi)
  // and then rotate this circle around the z-axis by angle theta:
  //					x = xc*cos(theta) - yc*sin(theta) 	
  //					y = xc*sin(theta) + yc*cos(theta)
  //					z = zc
  // Simplify: yc==0, so
  //					x = (rbend + rbar*cos(phi))*cos(theta)
  //					y = (rbend + rbar*cos(phi))*sin(theta) 
  //					z = -rbar*sin(phi)
  // To construct a torus from a single triangle-strip, make a 'stepped spiral' 
  // along the length of the bent bar; successive rings of constant-theta, using 
  // the same design used for cylinder walls in 'makeCyl()' and for 'slices' in 
  // makeSphere().  Unlike the cylinder and sphere, we have no 'special case' 
  // for the first and last of these bar-encircling rings.
  //
  var rbend = 1.0;										// Radius of circle formed by torus' bent bar
  var rbar = 0.5;											// radius of the bar we bent to form torus
  var barSlices = 23;									// # of bar-segments in the torus: >=3 req'd;
                                      // more segments for more-circular torus
  var barSides = 13;										// # of sides of the bar (and thus the 
                                      // number of vertices in its cross-section)
                                      // >=3 req'd;
                                      // more sides for more-circular cross-section
  // for nice-looking torus with approx square facets, 
  //			--choose odd or prime#  for barSides, and
  //			--choose pdd or prime# for barSlices of approx. barSides *(rbend/rbar)
  // EXAMPLE: rbend = 1, rbar = 0.5, barSlices =23, barSides = 11.
  
    // Create a (global) array to hold this torus's vertices:
  var torVerts = new Float32Array(floatsPerVertex*(2*barSides*barSlices +2));
  //	Each slice requires 2*barSides vertices, but 1st slice will skip its first 
  // triangle and last slice will skip its last triangle. To 'close' the torus,
  // repeat the first 2 vertices at the end of the triangle-strip.  Assume 7
  
  var phi=0, theta=0;										// begin torus at angles 0,0
  var thetaStep = 2*Math.PI/barSlices;	// theta angle between each bar segment
  var phiHalfStep = Math.PI/barSides;		// half-phi angle between each side of bar
                                        // (WHY HALF? 2 vertices per step in phi)
    // s counts slices of the bar; v counts vertices within one slice; j counts
    // array elements (Float32) (vertices*#attribs/vertex) put in torVerts array.
    for(s=0,j=0; s<barSlices; s++) {		// for each 'slice' or 'ring' of the torus:
      for(v=0; v< 2*barSides; v++, j+=7) {		// for each vertex in this slice:
        if(v%2==0)	{	// even #'d vertices at bottom of slice,
          torVerts[j  ] = (rbend + rbar*Math.cos((v)*phiHalfStep)) * 
                                               Math.cos((s)*thetaStep);
                  //	x = (rbend + rbar*cos(phi)) * cos(theta)
          torVerts[j+1] = (rbend + rbar*Math.cos((v)*phiHalfStep)) *
                                               Math.sin((s)*thetaStep);
                  //  y = (rbend + rbar*cos(phi)) * sin(theta) 
          torVerts[j+2] = -rbar*Math.sin((v)*phiHalfStep);
                  //  z = -rbar  *   sin(phi)
          torVerts[j+3] = 1.0;		// w
        }
        else {				// odd #'d vertices at top of slice (s+1);
                      // at same phi used at bottom of slice (v-1)
          torVerts[j  ] = (rbend + rbar*Math.cos((v-1)*phiHalfStep)) * 
                                               Math.cos((s+1)*thetaStep);
                  //	x = (rbend + rbar*cos(phi)) * cos(theta)
          torVerts[j+1] = (rbend + rbar*Math.cos((v-1)*phiHalfStep)) *
                                               Math.sin((s+1)*thetaStep);
                  //  y = (rbend + rbar*cos(phi)) * sin(theta) 
          torVerts[j+2] = -rbar*Math.sin((v-1)*phiHalfStep);
                  //  z = -rbar  *   sin(phi)
          torVerts[j+3] = 1.0;		// w
        }
        torVerts[j+4] = Math.random();		// random color 0.0 <= R < 1.0
        torVerts[j+5] = Math.random();		// random color 0.0 <= G < 1.0
        torVerts[j+6] = Math.random();		// random color 0.0 <= B < 1.0
      }
    }
    // Repeat the 1st 2 vertices of the triangle strip to complete the torus:
    torVerts[j  ] = rbend + rbar;	// copy vertex zero;
            //	x = (rbend + rbar*cos(phi==0)) * cos(theta==0)
    torVerts[j+1] = 0.0;
            //  y = (rbend + rbar*cos(phi==0)) * sin(theta==0) 
    torVerts[j+2] = 0.0;
            //  z = -rbar  *   sin(phi==0)
    torVerts[j+3] = 1.0;		// w
    torVerts[j+4] = Math.random();		// random color 0.0 <= R < 1.0
    torVerts[j+5] = Math.random();		// random color 0.0 <= G < 1.0
    torVerts[j+6] = Math.random();		// random color 0.0 <= B < 1.0
    j+=7; // go to next vertex:
    torVerts[j  ] = (rbend + rbar) * Math.cos(thetaStep);
            //	x = (rbend + rbar*cos(phi==0)) * cos(theta==thetaStep)
    torVerts[j+1] = (rbend + rbar) * Math.sin(thetaStep);
            //  y = (rbend + rbar*cos(phi==0)) * sin(theta==thetaStep) 
    torVerts[j+2] = 0.0;
            //  z = -rbar  *   sin(phi==0)
    torVerts[j+3] = 1.0;		// w
    torVerts[j+4] = Math.random();		// random color 0.0 <= R < 1.0
    torVerts[j+5] = Math.random();		// random color 0.0 <= G < 1.0
    torVerts[j+6] = Math.random();		// random color 0.0 <= B < 1.0

    return torVerts;
}