var muBtn = document.getElementById('mu');
var text = document.getElementById('text');
function endPoint() {
    document.getElementById('text').innerHTML = '<a href="">再読み込みしてください</a>';
    document.body.style.backgroundColor = '#fff';
    muBtn.innerText = 'Fail';
    text.style.color = '#000';
    return;
}

/**
 * shortcut to click muBtn
 */
window.onkeydown = (e) => {
    if (e.key === 'Enter') {
        muBtn.onclick();
    }
}

var count;
/**
 * @param {n} wait for n seconds
 * @param {exeNum} id for next execution
 */
function loading(n, exeNum) {
    count++;
    if (count > n) {
        if (exeNum === 2) {
            exe2();
        } else if (exeNum === 3) {
            exe3();
        } else if (exeNum === 4) {
            exe4();
        } else {
            exe5();
        }
    }
}

/**
 * @param {text} the text appended a dot(.)
 */
function dots(text) {
    text.innerText = text.innerText + '.';
}

var firstClick = true;
var sleepTimer;
muBtn.onclick = () => {
    if (!firstClick) { return; }
    firstClick = false;
    var a1 = window.confirm('このページは安全でない可能性があります。\nそれでもこのページにアクセスしますか？');
    if (!a1) {
        endPoint();
        return;
    }
    var a2 = window.confirm('このページは安全でない可能性があります。\nそれでもこのページにアクセスしますか？');
    if (!a2) {
        endPoint();
        return;
    }

    text.innerText = '読み込んでいます...';

    count = 0;
    sleepTimer = setInterval(()=>{loading(10, 2)}, 100);
}


/**
 * executed after muBtn.onclick()
 */
function exe2() {
    clearInterval(sleepTimer);
    var a3 = window.confirm('CAUTION!\nThere are several illegal error. It may occur a critical problem on your computer. Do you want to continue?\n不正なエラーが検出されました。お使いのパソコンに重大なエラーを引き起こす可能性があります。それでもアクセスしますか？');
    if (!a3) {
        endPoint();
        return;
    }
    text.innerText = '隱ｭ縺ｿ霎ｼ繧薙〒縺?∪縺?..';

    count = 0;
    sleepTimer = setInterval(()=>{loading(0, 3)}, 100);
}

var dotsAppear;
/**
 * executed after exe2()
 */
function exe3() {
    clearInterval(sleepTimer);
    var a4 = window.confirm('ホントにいいんですね？');
    if (!a4) {
        endPoint();
        return;
    }
    document.body.style.backgroundColor = '#000';
    text.style.color = '#f00';
    dotsAppear = setInterval(()=>{dots(text)}, 50);

    count = 0;
    sleepTimer = setInterval(()=>{loading(30, 4)}, 100);
}

/**
 * executed after exe3()
 */
function exe4() {
    clearInterval(sleepTimer);
    clearInterval(dotsAppear);
    window.alert('譁ｰ縺励＞譛昴′縺阪◆蟶梧悍縺ｮ譛昴′蟶梧悍縺ｮ譛昴′蝟懊?縺ｫ閭ｸ繧帝幕縺榊､ｧ遨ｺ莉ｰ縺');
    window.alert('繝ｩ繧ｸ繧ｪ縺ｮ螢ｰ縺ｫ蛛･繧?°縺ｪ閭ｸ繧偵％縺ｮ阮ｫ繧矩｢ｨ縺ｫ髢九￠繧医◎繧後＞縺｡縺ｫ縺輔ｓ');
    var a5 = window.confirm('去れ。');
    if (a5) {
        endPoint();
        return;
    }

    count = 0;
    sleepTimer = setInterval(()=>{loading(0, 5)}, 100);
}

var tweetArea = document.getElementById('tweetArea');
/**
 * executed after exe4()
 */
function exe5() {
    clearInterval(sleepTimer);
    document.body.style.backgroundColor = '#fff';
    muBtn.innerText = 'Success!';
    text.style.color = '#00acee';
    text.style.fontWeight = 'bold';
    text.innerText = 'おお ゆうかんな おひとよ！\nみごと しゅぎょうを おえられましたな！'

    var p = document.createElement('p');
    p.innerText = 'This website was inspired by \"ムのしゅぎょう\" in MOTHER 2'
    p.style.marginTop = '50px';
    document.body.appendChild(p);

    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
                        + encodeURIComponent('ムのしゅぎょう')
                        + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', 'ムのしゅぎょうをクリアしました！');
    anchor.innerText = 'Tweet #ムのしゅぎょう';
    tweetArea.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetArea.appendChild(script);
}
