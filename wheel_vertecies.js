function get_wheel_vertecies(steps,  sec_wheel,sections) {
    deg_inc = Math.PI*2/steps
    coordinates = []

    for(theta = 0; theta < 2*Math.PI; theta+=deg_inc){
        x = Math.cos(theta)
        y = Math.sin(theta)

        sect = Math.floor(theta / (2*Math.PI / sec_wheel)) % 2 == 0
        if(sect){
            r = 0,g = 0, b = 0
        }else {
            r = 0.4, g = 0.4, b = 0.4
        }

        coordinates = coordinates.concat(
            [
                x, y, 0,1,    r,g,b,
                x, y, 1,1,    r,g,b,
            ]
        )
    }

    for(theta = 0; theta < 2*Math.PI; theta+=deg_inc){
        x1 = Math.cos(theta)
        y1 = Math.sin(theta)
        
        sect = Math.floor(theta / (2*Math.PI / sections)) % 2 == 0
        if(sect){
            r = 1,g = 1, b = 1
        }else {
            r = 0.4, g = 0.4, b = 0.4
        }
        
        coordinates = coordinates.concat(
            [
                0,  0,  0,1,    1,1,1,
                x1, y1, 0,1,    r,g,b,
            ]
        )
    }

    for(theta = 0; theta < 2*Math.PI; theta+=deg_inc){
        x1 = Math.cos(theta)
        y1 = Math.sin(theta)
        
        sect = Math.floor(theta / (2*Math.PI / sections)) % 2 == 0
        if(sect){
            r = 1,g = 1, b = 1
        }else {
            r = 0.4, g = 0.4, b = 0.4
        }
        
        coordinates = coordinates.concat(
            [
                x1, y1, 1,1,    r,g,b,
                0,  0,  1,1,    1,1,1,
            ]
        )
    }
    
    h = 1
    coordinates = coordinates.concat(
        [
            0, h/(2*Math.sqrt(3))*2/3, -0.01 ,1,                        37/255, 150/255, 190/255,
            -h/(2*Math.sqrt(3))*2/3, -h/(2*Math.sqrt(3))*2/3, 0 ,1,     234/255,182/255,118/255,
            h/(2*Math.sqrt(3))*2/3, -h/(2*Math.sqrt(3))*2/3, 0 ,1,      135/255,62/255,35/255,
        ]
    )

    return coordinates

}