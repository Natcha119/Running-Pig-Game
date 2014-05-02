var Beetroot = Veg.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/veg2.png' );
		},
		
		getHitRatio : function(){
			return 0.1;
		},
});