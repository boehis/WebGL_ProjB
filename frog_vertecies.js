function make_frog_body_vertecies() {

    var x1 = -1, y1 = -0.6, z1 = 0 

    var x2 = 0, y2 = 0.2, z2 = 0.58
    var x3 = 0, y3 = 0.58, z3 = 0.2
    
    var x10 = 1, y10 = 0.6, z10 = 0 

    h = 0.4

    var torsoR=0.3, torsoG=1, torsoB=0

    return [ 
        x2 + h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, z3, 1,          .2,.2,.8, 

        x3 + h, y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,          .2,.2,.8, 
        x2 + h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        
        x2 + h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        
        x3 + h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x2 + h, -y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,          torsoR,torsoG,torsoB, 

        x2 + h, y2, z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,            torsoR,torsoG,torsoB, 

        x1, y1, z1, 1,                  1,0.6,0,

        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,            torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,             .2,.2,.8,
        x3 - h, y3, z3, 1,              .2,.2,.8,
        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 


        x10, y10, z10, 1,               1,0.6,0,

        x2 + h, y2, z2, 1,              torsoR,torsoG,torsoB, 
        x3 + h, y3, z3, 1,              torsoR,torsoG,torsoB, 
        x3 + h, y3, -z3, 1,             torsoR,torsoG,torsoB, 
        x2 + h, y2, -z2, 1,             torsoR,torsoG,torsoB, 
        x2 + h, -y2, -z2, 1,            torsoR,torsoG,torsoB, 
        x3 + h, -y3, -z3, 1,            torsoR,torsoG,torsoB, 
        x3 + h, -y3, z3, 1,             torsoR,torsoG,torsoB, 
        x2 + h, -y2, z2, 1,             torsoR,torsoG,torsoB,
        x2 + h, y2, z2, 1,              torsoR,torsoG,torsoB, 
    ]
}

function make_frog_leg_vertecies() {

    var x1 = -1, y1 = 0, z1 = 0 

    var x2 = 0, y2 = 0.3, z2 = 0.58
    var x3 = 0, y3 = 0.58, z3 = 0.3
    
    var x10 = 1, y10 = 0, z10 = 0 

    h = 0.4

    var torsoR=0.3, torsoG=0.7, torsoB=0

    return [ 
        x2 + h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, z3, 1,          torsoR,torsoG,torsoB,

        x3 + h, y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x2 + h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        
        x2 + h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        
        x3 + h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x2 + h, -y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,          torsoR,torsoG,torsoB, 

        x2 + h, y2, z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,            torsoR,torsoG,torsoB, 

        x1, y1, z1, 1,                  0.7,0.7,0,

        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,            torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,             torsoR,torsoG,torsoB, 
        x3 - h, y3, z3, 1,              torsoR,torsoG,torsoB,
        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 


        x10, y10, z10, 1,               1,0.6,0,

        x2 + h, y2, z2, 1,              torsoR,torsoG,torsoB, 
        x3 + h, y3, z3, 1,              torsoR,torsoG,torsoB, 
        x3 + h, y3, -z3, 1,             torsoR,torsoG,torsoB, 
        x2 + h, y2, -z2, 1,             torsoR,torsoG,torsoB, 
        x2 + h, -y2, -z2, 1,            torsoR,torsoG,torsoB, 
        x3 + h, -y3, -z3, 1,            torsoR,torsoG,torsoB, 
        x3 + h, -y3, z3, 1,             torsoR,torsoG,torsoB, 
        x2 + h, -y2, z2, 1,             torsoR,torsoG,torsoB,
        x2 + h, y2, z2, 1,              torsoR,torsoG,torsoB, 
    ]
}

function make_frog_eye_vertecies(eye_size) {

    var x1 = -h, y1 = 0, z1 = 0 

    var x2 = 0, y2 = 0.3, z2 = 0.58
    var x3 = 0, y3 = 0.58, z3 = 0.3
    
    var x10 = h, y10 = 0, z10 = 0 

    h = 0.4

    var torsoR=0.3, torsoG=1, torsoB=0

    return [ 
        x2 + h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, z3, 1,          torsoR,torsoG,torsoB,

        x3 + h, y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x2 + h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,          torsoR,torsoG,torsoB, 
        
        x2 + h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,          torsoR,torsoG,torsoB, 
        x3 + h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,          torsoR,torsoG,torsoB, 
        
        x3 + h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,          torsoR,torsoG,torsoB, 
        x2 + h, -y2, z2, 1,          torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,          torsoR,torsoG,torsoB, 

        x2 + h, y2, z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, z2, 1,            torsoR,torsoG,torsoB, 

        x1, y1, z1, 1,                  torsoR,torsoG,torsoB, 

        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 
        x2 - h, -y2, z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, z3, 1,             torsoR,torsoG,torsoB, 
        x3 - h, -y3, -z3, 1,            torsoR,torsoG,torsoB, 
        x2 - h, -y2, -z2, 1,            torsoR,torsoG,torsoB, 
        x2 - h, y2, -z2, 1,             torsoR,torsoG,torsoB, 
        x3 - h, y3, -z3, 1,             torsoR,torsoG,torsoB, 
        x3 - h, y3, z3, 1,              torsoR,torsoG,torsoB,
        x2 - h, y2, z2, 1,              torsoR,torsoG,torsoB, 


        x10, y10, z10, 1,               1,1,1,

        x2 + h, y2, z2, 1,              1,1,1,
        x3 + h, y3, z3, 1,              1,1,1,
        x3 + h, y3, -z3, 1,             1,1,1,
        x2 + h, y2, -z2, 1,             1,1,1,
        x2 + h, -y2, -z2, 1,            1,1,1,
        x3 + h, -y3, -z3, 1,            1,1,1,
        x3 + h, -y3, z3, 1,             1,1,1,
        x2 + h, -y2, z2, 1,             1,1,1,
        x2 + h, y2, z2, 1,              1,1,1,


        x10, y10, z10, 1,               0,0,0,

        x2 + h +0.001, eye_size*y2,     eye_size* z2, 1,              0,0,0,
        x3 + h +0.001, eye_size*y3,     eye_size* z3, 1,              0,0,0,
        x3 + h +0.001, eye_size*y3,     eye_size* -z3, 1,             0,0,0,
        x2 + h +0.001, eye_size*y2,     eye_size* -z2, 1,             0,0,0,
        x2 + h +0.001, eye_size*-y2,    eye_size*  -z2, 1,            0,0,0,
        x3 + h +0.001, eye_size*-y3,    eye_size*  -z3, 1,            0,0,0,
        x3 + h +0.001, eye_size*-y3,    eye_size*  z3, 1,             0,0,0,
        x2 + h +0.001, eye_size*-y2,    eye_size*  z2, 1,             0,0,0,
        x2 + h +0.001, eye_size*y2,     eye_size* z2, 1,              0,0,0,
    ]

}