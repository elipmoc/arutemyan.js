const Name = require('./lib/name')
const MokukMoku = require('./lib/mokukmoku')

class Arutemyan {
    // あるてみかんを文字列で取得
    get hiraganaName() { return Name.getHiraganaName(); }
    // arutemyanを文字列で取得
    get name() { return Name.getName(); }
    // 木曜日を判定する
    get isThursday() { return MokukMoku.isThursday(); }
    // もくもくもくようびを文字列で取得
    generateMokuMoku(description) { return MokukMoku.generateMokuMoku(description, "@" + this.name) }
    // 年齢を取得
    get age() { return 10; }
}

module.exports = Arutemyan;