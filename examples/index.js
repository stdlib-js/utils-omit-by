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

var omitBy = require( './../lib' );

function predicate( key, value ) {
	return ( typeof value === 'number' );
}

var obj1 = {
	'a': '1',
	'b': 2,
	'c': NaN,
	'd': null
};

var obj2 = omitBy( obj1, predicate );

console.dir( obj2 );
// => { 'a': '1', 'd': null }
