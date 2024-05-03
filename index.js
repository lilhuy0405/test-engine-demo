fixture('Getting Started')
    .page('https://www.google.com/');

test('My first test', async t => {
    //try to search for "testcafe" in google
    await t.expect(1).eql(1);
});

test('Fail test', async t => {
    //this test will fail
   await t.expect(1).eql(2);
});

test('My second test', async t => {
    //try to search for "testcafe" in google
   await t.expect(1).eql(1);
});

test('My third test', async t => {
    //try to search for "testcafe" in google
    await t.expect(1).eql(1);
});