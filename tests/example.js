var test = require('tape');

test('beep boop', (t) => {
    t.plan(2);

    t.equal(1 + 1, 2);
    setTimeout( () => {
        t.deepEqual(
            'ABC'.toLowerCase().split(''),
            ['a','b','c'],
            "these arrays are equal"
        );
    }, 1000);
});
