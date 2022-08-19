const { generateToken, verifyToken } = require('../../src/core/token');


const id = '099a857f-e9e9-4503-b93f-5898a1d39907'

test('generate token', async () => {
    const token = await generateToken(id);
    const payload = await verifyToken(token);
    expect(payload).not.toBe(null);
    expect(payload.userId).toBe(id)
});