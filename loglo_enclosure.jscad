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
// height 0.58mm (1mm with sticker backing)

// 9v battery specs
// x 27mm
// y 46mm (55mm including attachment)
// z 18mm
// give a 2mm lip at bottom

// white acrylic top - top
// height 3mm
// outer diameter 70mm
// inner diameter ?mm 
var topTopHeight = 3;
// clear acrylic top - base
// height 3mm
// diameter 70mm
var topBaseHeight = 3;

function main() {

    return union(
        // walls and base
        difference(
        cylinder({r: wallDiam, h:wallHeight, center: true}),
        cylinder({r: wallDiam - wallThickness,h:wallHeight, center: true}).translate([0,0,wallThickness])
        ),
        // support structure for top - top
        difference(
        cylinder({r: wallDiam - wallThickness,h:5,center:true}),
        cylinder({r: wallDiam - (2*wallThickness),h:5,center:true})
        ).translate([0,0, wallHeight/2 - 2.5 - topTopHeight]),
        difference(
        // support structure for top - base
        cylinder({r: wallDiam - (2*wallThickness),h:5,center:true}),
        cylinder({r: wallDiam - (3*wallThickness),h:5,center:true})
        ).translate([0,0, wallHeight/2 - 2.5 - topTopHeight - topBaseHeight])
    ).translate([0,0,wallHeight/2]);
}
