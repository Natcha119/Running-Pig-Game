var Radish = Veg.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/veg3.png' );
		},

		getHitRatio : function(){
			return 0.1;
		},
});