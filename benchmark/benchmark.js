/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var pkg = require( './../package.json' ).name;
var omitBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj;
	var out;
	var i;

	function predicate( key, value ) {
		return ( typeof value === 'number' );
	}
	obj = {
		'a': '1',
		'b': 2,
		'c': NaN,
		'd': null,
		'e': randu()
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.e = randu();
		out = omitBy( obj, predicate );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
