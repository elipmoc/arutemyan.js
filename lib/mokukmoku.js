module.exports = {
    isThursday() {
        return new Date().getDay() === 4;
    },
    generateMokuMoku(description, name) {
        return `${description}もくもくもくようびが${name}の頸椎を締め上げる
　　　 ╭◜◝  ͡  ◜◝╮
　　💪( ¨̮  💪　 )
　　     人　    Ｙ
　　　(　ヽ　ﾉ
　　　人　 Ｙ
　　 (　ヽ ﾉ
　　 人　Ｙ
　　(　ヽﾉ
　  人　＼
　 (＿)､＿)`;
    }
};