"use strict";

import {module} from 'src/app/module';

describe("Testing module", function() {
    it("should return an array", function() {
        expect(module.list()).toEqual(jasmine.any(Array));
    });

    it("the array length should be 6", function() {
        expect(module.list().length).toBe(6);
    });
});