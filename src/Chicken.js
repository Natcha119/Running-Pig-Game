var Chicken = Meat.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/m3.png' );
		},

		getHitRatio : function(){
			return 0.1;
		},
});