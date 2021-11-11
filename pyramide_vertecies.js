function make_pyramide_vertecies() {

  var p0 = [-1,-1,0,1, Math.random(),Math.random(),Math.random()]
  var p1 = [1,-1,0,1, Math.random(),Math.random(),Math.random()]
  var p2 = [1,1,0,1, Math.random(),Math.random(),Math.random()]
  var p3 = [-1,1,0,1, Math.random(),Math.random(),Math.random()]
  var pt = [0,0,1,1, Math.random(),Math.random(),Math.random()]

  return [
    p0,p1,p2,
    p0,p2,p3,

    p0,p1,pt,
    p1,p2,pt,
    p2,p3,pt,
    p3,p0,pt,
  ].flat()
}