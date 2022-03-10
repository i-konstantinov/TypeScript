/**
 * modules export classes
 * once a class is exported by a module
 * it can be accessed by any file that required that module
 */
module Utility {
    export class Usefull {
        timesTwo(n: number) {
            return n * 2;
        }
    }
}