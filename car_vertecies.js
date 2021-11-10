function get_car_vertecies() {


var x1 = -0.95, y1 = 0
var x2 = -1.0, y2 = 0.15
var x3 = -0.9, y3 = 0.2
var x4 = -0.94, y4 = 0.35
var x5 = -0.78, y5 = 0.41
var x6 = -0.3, y6 = 0.4
var x7 = 0.98, y7 = 0.4
var x8 = 1.0, y8 = 0.2
var x9 = 0.9, y9 = 0.1
var x10 = 0.7, y10 = 0


var x11 = 0, y11 = 0.4
var x12 = 0.55, y12 = 0.4
var x13 = 0.15, y13 = 0.58
var x14 = -0.11, y14 = 0.6


var carsideR = 0, carsideG = 0, carsideB = 0.8
var carhullR = 0, carhullG = 0, carhullB = 0.5

var carroofR = 0, carroofG = 0, carroofB = 0.5

return [
    //CAR BODY -- inspiration from https://www.3dcadbrowser.com/3d-model/ford-mustang-1966, but i only looked at the 3d view, not at any mesh / node list
    //=========================
  
    //FRONT SIDE
    x1, y1, 0, 1.0,     carsideR, carsideG, carsideB,
    x3, y3, 0, 1.0,     carsideR, carsideG, carsideB,
    x2, y2, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x3, y3, 0, 1.0,     carsideR, carsideG, carsideB,
    x5, y5, 0, 1.0,     carsideR, carsideG, carsideB,
    x4, y4, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x1, y1, 0, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 0, 1.0,     carsideR, carsideG, carsideB,
    x3, y3, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x3, y3, 0, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 0, 1.0,     carsideR, carsideG, carsideB,
    x5, y5, 0, 1.0,     carsideR, carsideG, carsideB,
    
    x1, y1, 0, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 0, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x1, y1, 0, 1.0,     carsideR, carsideG, carsideB,
    x10, y10, 0, 1.0,   carsideR, carsideG, carsideB,
    x7, y7, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x10, y10, 0, 1.0,   carsideR, carsideG, carsideB,
    x9, y9, 0, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 0, 1.0,     carsideR, carsideG, carsideB,
  
    x9, y9, 0, 1.0,     carsideR, carsideG, carsideB,
    x8, y8, 0, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 0, 1.0,     carsideR, carsideG, carsideB,
  
  
    //BACK SIDE
    x1, y1, 1, 1.0,     carsideR, carsideG, carsideB,
    x2, y2, 1, 1.0,     carsideR, carsideG, carsideB,
    x3, y3, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x3, y3, 1, 1.0,     carsideR, carsideG, carsideB,
    x4, y4, 1, 1.0,     carsideR, carsideG, carsideB,
    x5, y5, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x1, y1, 1, 1.0,     carsideR, carsideG, carsideB,
    x3, y3, 1, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x3, y3, 1, 1.0,     carsideR, carsideG, carsideB,
    x5, y5, 1, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 1, 1.0,     carsideR, carsideG, carsideB,
    
    x1, y1, 1, 1.0,     carsideR, carsideG, carsideB,
    x6, y6, 1, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x1, y1, 1, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 1, 1.0,     carsideR, carsideG, carsideB,
    x10, y10, 1, 1.0,   carsideR, carsideG, carsideB,
  
    x10, y10, 1, 1.0,   carsideR, carsideG, carsideB,
    x7, y7, 1, 1.0,     carsideR, carsideG, carsideB,
    x9, y9, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x9, y9, 1, 1.0,     carsideR, carsideG, carsideB,
    x7, y7, 1, 1.0,     carsideR, carsideG, carsideB,
    x8, y8, 1, 1.0,     carsideR, carsideG, carsideB,
  
  
    
    //CAR BELOW
    x1, y1, 0, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
    x1, y1, 1, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
    x10, y10, 0, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
    x10, y10, 1, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
    x10, y10, 0, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
    x1, y1, 1, 1.0,     0.2*carhullR, 0.2*carhullG, 0.2*carhullB,
  
    //CAR REAR
    x10, y10, 0, 1.0,     carhullR, carhullG, carhullB,
    x10, y10, 1, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 0, 1.0,     carhullR, carhullG, carhullB,
    x10, y10, 1, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 1, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 0, 1.0,     carhullR, carhullG, carhullB,
  
    x8, y8, 0, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 0, 1.0,     carhullR, carhullG, carhullB,
    x8, y8, 1, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 1, 1.0,     carhullR, carhullG, carhullB,
    x8, y8, 1, 1.0,     carhullR, carhullG, carhullB,
    x9, y9, 0, 1.0,     carhullR, carhullG, carhullB,
  
    x7, y7, 0, 1.0,     1.0, 0, 0,
    x8, y8, 0, 1.0,     1.0, 0, 0,
    x8, y8, 1, 1.0,     1.0, 0, 0,
    x8, y8, 1, 1.0,     1.0, 0, 0,
    x7, y7, 1, 1.0,     1.0, 0, 0,
    x7, y7, 0, 1.0,     1.0, 0, 0,
  
    x8, y8, 0, 1.0,         1.0, 0.5, 0,
    x8, y8, 0+0.1, 1.0,     1.0, 0.5, 0,
    x8, y8+0.1, 0, 1.0,     1.0, 0.5, 0,
  
    x8, y8, 1, 1.0,         1.0, 0.5, 0,
    x8, y8+0.1, 1, 1.0,     1.0, 0.5, 0,
    x8, y8, 1-0.1, 1.0,     1.0, 0.5, 0,
    
  
  
    //CAR TOP
    x6, y6, 0, 1.0,     carhullR, carhullG, carhullB,
    x7, y7, 0, 1.0,     carhullR, carhullG, carhullB,
    x7, y7, 1, 1.0,     carhullR, carhullG, carhullB,
    x7, y7, 1, 1.0,     carhullR, carhullG, carhullB,
    x6, y6, 1, 1.0,     carhullR, carhullG, carhullB,
    x6, y6, 0, 1.0,     carhullR, carhullG, carhullB,
  
    x5, y5, 0, 1.0,     carhullR, carhullG, carhullB,
    x6, y6, 0, 1.0,     carhullR, carhullG, carhullB,
    x5, y5, 1, 1.0,     carhullR, carhullG, carhullB,
    x6, y6, 1, 1.0,     carhullR, carhullG, carhullB,
    x5, y5, 1, 1.0,     carhullR, carhullG, carhullB,
    x6, y6, 0, 1.0,     carhullR, carhullG, carhullB,
  
    //CAR FRONT
    x5, y5, 0, 1.0,     carhullR, carhullG, carhullB,
    x5, y5, 1, 1.0,     carhullR, carhullG, carhullB,
    x4, y4, 0, 1.0,     carhullR, carhullG, carhullB,
    x5, y5, 1, 1.0,     carhullR, carhullG, carhullB,
    x4, y4, 1, 1.0,     carhullR, carhullG, carhullB,
    x4, y4, 0, 1.0,     carhullR, carhullG, carhullB,
  
    x3, y3, 0, 1.0,     1,1,1,
    x4, y4, 0, 1.0,     1,1,1,
    x3, y3, 1, 1.0,     1,1,1,
    x4, y4, 1, 1.0,     1,1,1,
    x3, y3, 1, 1.0,     1,1,1,
    x4, y4, 0, 1.0,     1,1,1,
  
    x2, y2, 0, 1.0,     carhullR, carhullG, carhullB,
    x3, y3, 0, 1.0,     carhullR, carhullG, carhullB,
    x3, y3, 1, 1.0,     carhullR, carhullG, carhullB,
    x3, y3, 1, 1.0,     carhullR, carhullG, carhullB,
    x2, y2, 1, 1.0,     carhullR, carhullG, carhullB,
    x2, y2, 0, 1.0,     carhullR, carhullG, carhullB,
    
    x1, y1, 0, 1.0,     carhullR, carhullG, carhullB,
    x2, y2, 0, 1.0,     carhullR, carhullG, carhullB,
    x1, y1, 1, 1.0,     carhullR, carhullG, carhullB,
    x1, y1, 1, 1.0,     carhullR, carhullG, carhullB,
    x2, y2, 0, 1.0,     carhullR, carhullG, carhullB,
    x2, y2, 1, 1.0,     carhullR, carhullG, carhullB,
  
    x3, y3, 0, 1.0,         1.0, 0.5, 0,
    x4, y3+0.1, 0, 1.0,     1.0, 0.5, 0,
    x3, y3, 0+0.1, 1.0,     1.0, 0.5, 0,
  
    x3, y3, 1, 1.0,         1.0, 0.5, 0,
    x3, y3, 1-0.1, 1.0,     1.0, 0.5, 0,
    x4, y3+0.1, 1, 1.0,     1.0, 0.5, 0,
    
  
    //ROOF FRONT SIDE
    x6, y6, 0, 1.0,       0.8,0.0,0.8,
    x11, y11, 0, 1.0,     0.6,0.4,0.8,
    x14, y14, 0, 1.0,     0.8,0.8,0.2,
  
    x13, y13, 0, 1.0,     0.8,0.8,0.8,
    x14, y14, 0, 1.0,     0.8,0.8,0.2,
    x11, y11, 0, 1.0,     0.6,0.4,0.8,
  
    x13, y13, 0, 1.0,     0.8,0.8,0.8,
    x11, y11, 0, 1.0,     0.6,0.4,0.8,
    x12, y12, 0, 1.0,     0.8,0.8,0.8,
  
    //ROOF BACK SIDE
    x11, y11, 1, 1.0,     0.6,0.4,0.8,
    x6, y6,   1, 1.0,       0.4,0.2,0.8,
    x14, y14, 1, 1.0,     0.8,0.8,0.2,
  
    x13, y13, 1, 1.0,     0.8,0.8,0.8,
    x11, y11, 1, 1.0,     0.6,0.4,0.8,
    x14, y14, 1, 1.0,     0.8,0.8,0.2,
  
    x12, y12, 1, 1.0,     0.8,0.8,0.8,
    x11, y11, 1, 1.0,     0.6,0.4,0.8,
    x13, y13, 1, 1.0,     0.8,0.8,0.8,
  
    //ROOF TOP
    x6, y6, 0, 1.0,     0.8,0.0,0.8,
    x14, y14, 0, 1.0,     0.8,0.8,0.2,
    x6, y6, 1, 1.0,     0.4,0.2,0.8,
    x14, y14, 1, 1.0,     0.8,0.8,0.2,
    x6, y6, 1, 1.0,     0.4,0.2,0.8,
    x14, y14, 0, 1.0,     0.8,0.8,0.2,
  
    x13, y13, 0, 1.0,     carsideR, carsideG, carsideB,
    x13, y13, 1, 1.0,     carsideR, carsideG, carsideB,
    x14, y14, 0, 1.0,     carsideR, carsideG, carsideB,
    x14, y14, 1, 1.0,     carsideR, carsideG, carsideB,
    x14, y14, 0, 1.0,     carsideR, carsideG, carsideB,
    x13, y13, 1, 1.0,     carsideR, carsideG, carsideB,
  
    x13, y13, 0, 1.0,     carsideR, carsideG, carsideB,
    x12, y12, 0, 1.0,     carsideR, carsideG, carsideB,
    x13, y13, 1, 1.0,     carsideR, carsideG, carsideB,
    x12, y12, 1, 1.0,     carsideR, carsideG, carsideB,
    x13, y13, 1, 1.0,     carsideR, carsideG, carsideB,
    x12, y12, 0, 1.0,     carsideR, carsideG, carsideB,
    
  ]
}
