const Arutemyan = require('../index');

test('new Arutemyan', () => {
    expect(new Arutemyan()).toBeDefined();
})

test('get Arutemyan name', () => {
    const arutemyan = new Arutemyan();
    expect(arutemyan.hiraganaName).toBe("あるてみかん");
    expect(arutemyan.name).toBe("arutemyan");
})

test('get Arutemyan isThursday', () => {
    const arutemyan = new Arutemyan();
    expect(arutemyan.isThursday).toBeDefined();
})

test('check Arutemyan generateMokuMoku', () => {
    const arutemyan = new Arutemyan();
    const description = "ほげほげ";

    const expectValue = `${description}もくもくもくようびが@arutemyanの頸椎を締め上げる
　　　 ╭◜◝  ͡  ◜◝╮
　　💪( ¨̮  💪　 )
　　     人　    Ｙ
　　　(　ヽ　ﾉ
　　　人　 Ｙ
　　 (　ヽ ﾉ
　　 人　Ｙ
　　(　ヽﾉ
　  人　＼
　 (＿)､＿)`
    expect(arutemyan.generateMokuMoku(description)).toBe(expectValue);
})

test('get Arutemyan age', () => {
    const arutemyan = new Arutemyan();
    expect(arutemyan.age).toBe(10);
})
