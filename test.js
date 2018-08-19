'use strict';
const execa = require('execa');
const test = require('ava');
const sta = require('str-to-arr');

const arr = sta('d h z a r b i');

test('There is output', async t => {
	const {stdout} = await execa('node', ['./cli.js', '"b a c r d"']);
	t.true(stdout.length > 0);
});

test('Test array equality', async t => {
	const {stdout} = await execa('node', ['./cli.js', '"b a c r d"']);
	t.truthy(stdout, arr);
});
