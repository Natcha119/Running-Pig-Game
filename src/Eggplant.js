var Eggplant = Veg.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/veg4.png' );
		},
		
		getHitRatio : function(){
			return 0.1;
		},
});