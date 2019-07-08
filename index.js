const Name = require('./lib/name')

class Arutemyan {
    // あるてみかんを文字列で取得
    get hiraganaName() { return Name.getHiraganaName(); }
    // arutemyanを文字列で取得
    get name() { return Name.getName(); }
}

module.exports = Arutemyan;