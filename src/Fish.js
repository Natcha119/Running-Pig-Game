var Fish = Meat.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/m5.png' );
		},

		getHitRatio : function(){
			return 0.1;
		},
});