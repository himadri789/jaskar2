describe('This is test suite',function() {

	it('This is test case with integer',function() {

		var a = addNum(1,2);
		expect(a).toBe(3);
	});
	
	});

describe('This is test suite',function() {

	it('This is test case with integer',function() {

		var a = addNum(0,2);
		expect(a).toBe(2);
	});
	
	});
	
describe('This is test suite',function() {

	it('This is test case with integer',function() {

		var a = addNum(1,0);
		expect(a).toBe(1);
	});
	
	});
	
describe('This is test suite',function() {

	it('This is test case with integer',function() {

		var a = addNum();
		expect(a).toBe(null);
	});
	
	});
	
	
//describe('This is test suite',function() {

//		it('This is test case with string',function() {

//		var b = addNum('e','f');
//		expect(b).toBe('ef');
//	});
	
//	});
