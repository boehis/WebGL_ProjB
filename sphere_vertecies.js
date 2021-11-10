function makeSphere() {
  //==============================================================================
  // Make a sphere from one OpenGL TRIANGLE_STRIP primitive.   Make ring-like 
  // equal-lattitude 'slices' of the sphere (bounded by planes of constant z), 
  // and connect them as a 'stepped spiral' design (see makeCylinder) to build the
  // sphere from one triangle strip.
    var slices = 13;		// # of slices of the sphere along the z axis. >=3 req'd
                        // (choose odd # or prime# to avoid accidental symmetry)
    var sliceVerts	= 27;	// # of vertices around the top edge of the slice
                        // (same number of vertices on bottom of slice, too)
    var topColr = new Float32Array([0,0,0]);	// North Pole: light gray
    var equColr = new Float32Array([0,0,0]);	// Equator:    bright green
    var botColr = new Float32Array([1,1,1]);	// South Pole: brightest gray.
    var sliceAngle = Math.PI/slices;	// lattitude angle spanned by one slice.
  
    // Create a (global) array to hold this sphere's vertices:
    var elementCount = ((slices * 2* sliceVerts) -2) * floatsPerVertex
    var sphVerts = new Float32Array(elementCount);
                      // # of vertices * # of elements needed to store them. 
                      // each slice requires 2*sliceVerts vertices except 1st and
                      // last ones, which require only 2*sliceVerts-1.
                      
    // Create dome-shaped top slice of sphere at z=+1
    // s counts slices; v counts vertices; 
    // j counts array elements (vertices * elements per vertex)
    var cos0 = 0.0;					// sines,cosines of slice's top, bottom edge.
    var sin0 = 0.0;
    var cos1 = 0.0;
    var sin1 = 0.0;	
    var j = 0;							// initialize our array index
    var isLast = 0;
    var isFirst = 1;
    for(s=0; s<slices; s++) {	// for each slice of the sphere,
      // find sines & cosines for top and bottom of this slice
      if(s==0) {
        isFirst = 1;	// skip 1st vertex of 1st slice.
        cos0 = 1.0; 	// initialize: start at north pole.
        sin0 = 0.0;
      }
      else {					// otherwise, new top edge == old bottom edge
        isFirst = 0;	
        cos0 = cos1;
        sin0 = sin1;
      }								// & compute sine,cosine for new bottom edge.
      cos1 = Math.cos((s+1)*sliceAngle);
      sin1 = Math.sin((s+1)*sliceAngle);
      // go around the entire slice, generating TRIANGLE_STRIP verts
      // (Note we don't initialize j; grows with each new attrib,vertex, and slice)
      if(s==slices-1) isLast=1;	// skip last vertex of last slice.
      for(v=isFirst; v< 2*sliceVerts-isLast; v++, j+=floatsPerVertex) {	
        if(v%2==0)
        {				// put even# vertices at the the slice's top edge
                // (why PI and not 2*PI? because 0 <= v < 2*sliceVerts
                // and thus we can simplify cos(2*PI(v/2*sliceVerts))  
          sphVerts[j  ] = sin0 * Math.cos(Math.PI*(v)/sliceVerts); 	
          sphVerts[j+1] = sin0 * Math.sin(Math.PI*(v)/sliceVerts);	
          sphVerts[j+2] = cos0;		
          sphVerts[j+3] = 1.0;			
        }
        else { 	// put odd# vertices around the slice's lower edge;
                // x,y,z,w == cos(theta),sin(theta), 1.0, 1.0
                // 					theta = 2*PI*((v-1)/2)/capVerts = PI*(v-1)/capVerts
          sphVerts[j  ] = sin1 * Math.cos(Math.PI*(v-1)/sliceVerts);		// x
          sphVerts[j+1] = sin1 * Math.sin(Math.PI*(v-1)/sliceVerts);		// y
          sphVerts[j+2] = cos1;																				// z
          sphVerts[j+3] = 1.0;																				// w.		
        }
        if(s==0) {	// finally, set some interesting colors for vertices:
          sphVerts[j+4]=topColr[0]; 
          sphVerts[j+5]=topColr[1]; 
          sphVerts[j+6]=topColr[2];	
          }
        else if(s==slices-1) {
          sphVerts[j+4]=botColr[0]; 
          sphVerts[j+5]=botColr[1]; 
          sphVerts[j+6]=botColr[2];	
        }
        else {
            sphVerts[j+4]= equColr[0]+j/elementCount; 
            sphVerts[j+5]= equColr[1]+j/elementCount; 
            sphVerts[j+6]= equColr[2]+j/elementCount;					
        }
      }
    }
    return sphVerts
  }
  