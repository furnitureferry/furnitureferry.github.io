// the flipside button is copied and modified from
// the super talented Hakim http://lab.hakim.se/flipside/

window.onload = function() {

	var btn = document.querySelector( '.btn' ),
			body = document.querySelector( 'body' );

	var btnFront = btn.querySelector( '.btn-front' ),
		  btnBack = btn.querySelector( '.btn-back' );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1 - x2;
		var dy = y1 - y2;
		return Math.sqrt( dx * dx + dy * dy );
	}

	function openMenu ( event ) {
		event.stopPropagation();
		var mx = event.clientX - btn.offsetLeft,
			my = event.clientY - btn.offsetTop;

		var w = btn.offsetWidth,
			h = btn.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort(function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn.setAttribute( 'data-direction', directions.shift().id );
		btn.classList.add( 'is-open' );
	}

	function closeMenu ( event ) {
		btn.classList.remove( 'is-open' );
	}

	btnFront.addEventListener( 'click', openMenu, false );

	btnBack.addEventListener( 'click', closeMenu, true );

	body.addEventListener( 'click', closeMenu, false );
	body.addEventListener( 'touchstart', closeMenu, false );

};

