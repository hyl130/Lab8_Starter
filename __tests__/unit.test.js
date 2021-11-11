// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checking valid phone number 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('checking valid phone number 2', () => {
    expect(functions.isPhoneNumber('815-900-4572')).toBe(true);
});

test('checking invalid phone number 1', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('checking invalid phone number 2', () => {
    expect(functions.isPhoneNumber('1234-56-7890')).toBe(false);
});

test('checking valid email 1', () => {
    expect(functions.isEmail('hyl130@ucsd.edu')).toBe(true);
});

test('checking valid email 2', () => {
    expect(functions.isEmail('student@ucsd.edu')).toBe(true);
});

test('checking invalid email 1', () => {
    expect(functions.isEmail('hyl13ucsd.edu')).toBe(false);
});

test('checking invalid email 2', () => {
    expect(functions.isEmail('studentedu')).toBe(false);
});

test('checking strong password 1', () => {
    expect(functions.isStrongPassword('Fall2021')).toBe(true);
});

test('checking strong password 2', () => {
    expect(functions.isStrongPassword('CSE110_Fall21')).toBe(true);
});

test('checking weak password 1', () => {
    expect(functions.isStrongPassword('2021fall')).toBe(false);
});

test('checking weak password 2', () => {
    expect(functions.isStrongPassword('morethanfifteencharacters')).toBe(false);
});

test('checking valid date 1', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('checking valid date 2', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});

test('checking invalid date 1', () => {
    expect(functions.isDate('November 14th, 2021')).toBe(false);
});

test('checking invalid date 2', () => {
    expect(functions.isDate('11/14/21')).toBe(false);
});

test('checking valid hex color 1', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('checking valid hex color 2', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('checking invalid hex color 1', () => {
    expect(functions.isHexColor('##0242')).toBe(false);
});

test('checking invalid hex color 2', () => {
    expect(functions.isHexColor('8FUU812')).toBe(false);
});