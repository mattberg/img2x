img2x
========

img2x is a jQuery plugin designed to replace standard resolution images with their @2x counterpart.

For background retina images you can just use straight CSS, but with image tags on the page, you need something a little different.

It is designed to work with normal image syntax:

      <img src="img.png" alt="" width="100" height="100" />

by just adding a class name (which you can configure):

      <img class="img2x" src="img.png" alt="" width="100" height="100" />

Then just make sure you have the @2x version available, and the image source will automatically update to:

      <img class="img2x" src="img@2x.png" alt="" width="100" height="100" />

jQuery function reference:

      $("img").img2x();

#### Notes

* This will actually force the browser to load both images, which is not optimal for performance/bandwidth issues

## Licensing

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

## Changelog

* _v1.00_ 2011-12-09
 * public release