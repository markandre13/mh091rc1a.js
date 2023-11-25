# mh091rc1.js

<div style="text-align:npm center">
  <img src="images/screenshot.png" />

  A variation of [Makehuman](http://www.makehumancommunity.org) 0.9.1-rc1a as a WebApp.
</div>

### WHAT

This repository ports parts of Makehuman 0.9.1-rc1a from C++ to Typescript.

The algorithms are described in [Ideas and methods for modeling 3D human figures](https://doi.org/10.1145/1341771.1341782).

Current status: rotate and pose human

### WHY

While this version of MakeHuman is limited when compared to the 1.x versions but features two usefull properties:

* shape keys: fewer artifacts when posing plus muscles change
* constraints: poses are restricted to those of a real body

The later 1.x versions provide much better meshes, morphs, a skeleton and alternative and extra meshes.

The goal learn about this version of MakeHuman and try to bring lost functionality to my MakeHuman 1.2 port [makehuman.js](https://github.com/markandre13/makehuman.js).

An overview of this implementation is given in
