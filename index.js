fixture('Getting Started')
    .page('https://www.google.com/');

test('First test', async t => {
    //try to search for "testcafe" in google
    await t.expect(1).eql(1);
});

test('Second test', async t => {
    //this test will fail
   await t.expect(1).eql(2);
});

test('Third test', async t => {
    //try to search for "testcafe" in google
   await t.expect(1).eql(2);
});

test('Forth test', async t => {
    //try to search for "testcafe" in google
    await t.expect(1).eql(2);
});