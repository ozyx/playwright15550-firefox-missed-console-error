const { test, expect } = require('@playwright/test');

test.describe('console error test', () => {
    const msgs = [];
    test.beforeEach(({page}) => {
        page.on('console', (msg) => {
            console.log(msg);
            msg.type() === 'error' ? msgs.push(msg) : undefined;
        });
    });
    test('Can detect one console error', async ({ page }) => {
        //Go to baseURL
        await Promise.all([
            page.waitForEvent('console'),
            page.goto('/', { waitUntil: 'networkidle' })
        ])
        expect(msgs).toHaveLength(1);
    });
});
