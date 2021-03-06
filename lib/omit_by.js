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

var objectKeys = require( '@stdlib/utils-keys' );
var isFunction = require( '@stdlib/assert-is-function' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns a partial object copy excluding properties for which a predicate returns a truthy value.
*
* @param {Object} obj - source object
* @param {Function} predicate - predicate function
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a function
* @returns {Object} new object
*
* @example
* function predicate( key, value ) {
*     return ( value > 1 );
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = omitBy( obj1, predicate );
* // returns { 'a': 1 }
*/
function omitBy( obj, predicate ) {
	var keys;
	var out;
	var key;
	var i;
	if ( typeof obj !== 'object' || obj === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', predicate ) );
	}
	out = {};
	keys = objectKeys( obj );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		if ( !predicate( key, obj[ key ] ) ) {
			out[ key ] = obj[ key ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = omitBy;
