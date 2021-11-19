<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# omitBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a partial object copy excluding properties for which a predicate (function) returns a truthy value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-omit-by
```

</section>

<section class="usage">

## Usage

```javascript
var omitBy = require( '@stdlib/utils-omit-by' );
```

#### omitBy( obj, predicate )

Returns a partial object copy excluding properties for which a `predicate` returns a truthy value.

```javascript
function predicate( key, value ) {
    return ( value > 1 );
}

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = omitBy( obj1, predicate );
// returns { 'a': 1 }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns a **shallow** copy.
-   The function **only** copies **own** properties. Hence, the function never copies inherited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var omitBy = require( '@stdlib/utils-omit-by' );

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
// returns { 'a': '1', 'd': null }
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/omit`][@stdlib/utils/omit]</span><span class="delimiter">: </span><span class="description">return a partial object copy excluding specified keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-omit-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-omit-by

[test-image]: https://github.com/stdlib-js/utils-omit-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-omit-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-omit-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-omit-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-omit-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-omit-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-omit-by/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/omit]: https://github.com/stdlib-js/utils-omit

<!-- </related-links> -->

</section>

<!-- /.links -->
