fixture('Getting Started')
    .page('https://www.google.com/');

test('My first test', async t => {
    //try to search for "testcafe" in google
    await t
        .typeText('textarea#APjFqb', 'testcafe')
        .pressKey('enter');
});