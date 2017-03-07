# Music Cube
A musical Rubik's Cube. Plays generative loop-based music based on the solvedness of a Rubik's Cube.

Will soon combine with Arduinos to make a physical cube with LEDs.

## Usage
Make sure you have [Sonic Pi](http://sonic-pi.net/) installed and running. Then run one of the commands below. If a usage method expects input, send one of the strings listed under *available rotations* below.

##### Launch cube and make random rotations
`npm run random [-- INTERVAL]`

##### Launch cube and listen on UDP port 12345 for rotations
`npm run udp [-- OVERRIDE_PORT]`

##### Launch cube and listen on serial port for rotations
`npm run serial`

##### Available rotations
- `F`: Rotate front face clockwise
- `f`: Rotate front face counterclockwise
- `B`: Rotate back face clockwise
- `b`: Rotate back face counterclockwise
- `U`: Rotate up face clockwise
- `u`: Rotate up face counterclockwise
- `D`: Rotate down face clockwise
- `d`: Rotate down face counterclockwise
- `L`: Rotate left face clockwise
- `l`: Rotate left face counterclockwise
- `R`: Rotate right face clockwise
- `r`: Rotate right face counterclockwise
- `?`: Random rotation