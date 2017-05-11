var drips = [];
const dripWidth = 16;

function setup() {
  let size = ( windowWidth > windowHeight ) ? windowHeight : windowWidth;
  size *= .65;
  size = Math.ceil(size);
  createCanvas( windowWidth, windowHeight );
  
  for( let i = 0; i < width; i++ ) {
    if( dripWidth > 1 ) {
      var x = i * dripWidth + dripWidth / 2;
    } else {
      var x = i;
    }
    let len = map( noise(i), 0, 1, height*.2, height*.8 );
    drips[i] = new drip( x, random( height*.1 ), random( 5, 10 ), len );
  }
  for( let i = drips.length-1; i > 0; i-- ) {
    if( drips[i].x > width ) {
      drips.pop();
    }
  }
}

function draw() {
  background( 0 );
  for( let i = 0; i < drips.length; i++ ) {
    drips[i].draw();
  }
}
