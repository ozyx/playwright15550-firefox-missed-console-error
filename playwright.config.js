/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    retries: 0,
    testDir: 'e2e',
    testIgnore: '**/*.perf.spec.js',
    timeout: 30 * 1000,
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:8080/#',
        timeout: 120 * 1000,
        reuseExistingServer: true
    },
    workers: 1,
    use: {
        browserName: "chromium",
        baseURL: 'http://localhost:8080/',
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'off'
    },
    projects: [
        {
            name: 'chrome',
            use: {
                browserName: 'chromium'
            }
          },
        {
            name: 'chrome-beta',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'chromium',
                channel: 'chrome-beta'
            }
        },
        {
            name: 'firefox',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'firefox'
            }
        },
        {
            name: 'safari',
            testMatch: '**/*.e2e.spec.js', // only run e2e tests
            use: {
                browserName: 'webkit'
            }
        },
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'on-failure',
            outputFolder: 'html-test-results'
        }]
    ]
};

module.exports = config;
