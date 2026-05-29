// Key difference summary
//                    Scope                       Runs                  Use for
// beforeAll       One describe block           Once per block      Shared setup within a group
// beforeEach       One describe block          Before every test     Reset/repeat setup per test
// Global Setup    Entire test suite             Once globally         Auth, DB seed, server start
// Fixtures        Any test file that imports it  Per test on demand    Reusable logic across files
