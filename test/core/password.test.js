const {hashPassword, verifyPassword} = require('../../src/core/password');

const passHash = '$argon2id$v=19$m=131072,t=6,p=1$85lpFCIgWjwNcG+gzBb0Pg$LjgOIxurkfDtP2yzb6THv2oog4lM4YnJGqQJTOf8ynA';
const passHash2 = '$argon2id$v=19$m=131072,t=6,p=1$oBH1zjxZXHRByyAeTNYfow$o0qEBV7AogzbhHv0qW68HSGl+KwJw6kCrqNeNfVoco0';

test('verify password', async () => {
    expect(await verifyPassword('password', passHash)).toBe(true);
});

test('hash password', async () => {
    const hashed = await hashPassword('password');
    expect(await verifyPassword('password', hashed)).toBe(true);
});