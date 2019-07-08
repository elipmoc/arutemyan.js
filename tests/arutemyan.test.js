const Arutemyan = require('../index');

test('new Arutemyan', () => {
    expect(new Arutemyan()).toBeDefined();
})

test('get Arutemyan name', () => {
    const arutemyan = new Arutemyan();
    expect(arutemyan.hiraganaName).toBe("あるてみかん");
    expect(arutemyan.name).toBe("arutemyan");
})
