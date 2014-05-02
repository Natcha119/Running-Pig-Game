var Potato = Veg.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/veg1.png' );
		},
		
		getHitRatio : function(){
			return 0.1;
		},
});