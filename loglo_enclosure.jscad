// title      : loglo
// author     : Luke Demarest
// license    : GPL v3 License
// revision   : 0.001
// tags       : Loglo, analog signaling
// file       : loglo_enclosure.jscad

// export in millimeters

var wallDiam = 75;
var wallHeight = 45;
var wallThickness = 5;

// inner diameter of 70mm
// inner height of 40mm

// circular softpot specs
// diameter 66mm
// height 1mm

// 9v battery specs
// x 27mm
// y 46mm (55mm including attachment)
// z 18mm
// give a 2mm lip at bottom

function main() {

        return difference(
                cylinder({r: wallDiam, h:wallHeight, center: true}),
                cylinder({r: wallDiam - wallThickness,h:wallHeight, center: true}).translate([0,0,wallThickness])
        ).translate([0,0,wallHeight/2]);
}

