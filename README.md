# Unhandled Arithmetic Errors in TypeScript

This repository demonstrates a potential issue with unhandled arithmetic errors in TypeScript. While the `divide` function explicitly handles division by zero, the other arithmetic functions (`add`, `subtract`, `multiply`) do not have error handling for potential overflow or underflow. This could lead to unexpected behavior or runtime errors in certain scenarios.

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file provides an improved version with enhanced error handling.