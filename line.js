function drip( x, amp, wavlen, len ) {
  this.x = x;
  this.amp = amp;
  this.wavlen = wavlen;
  this.len = len;
  this.draw = function() {
    colorMode( HSB );
    stroke( map( this.x, 0, width, 0, 360 ), 100, 100 );
    // strokeWeight(4);
    strokeWeight(dripWidth);
    line( this.x, 0, this.x, this.len + sin(  millis() * ( (1/60)/(wavlen*TAU) )  ) * this.amp );
  }
}
