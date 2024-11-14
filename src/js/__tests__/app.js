import usersSort from '../app.js';

test('users sort test', () => {
    expect(usersSort([
        {
            name: 'мечник', health: 10
        },
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
    ])).toEqual([
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
        {
            name: 'мечник', health: 10
        },
    ]);
});