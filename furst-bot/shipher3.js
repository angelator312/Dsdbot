const emojies = [
    ['๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', 'โบ๏ธ', '๐', '๐', '๐', '๐', '๐', '๐','๐ณ'],
    ['๐', '๐', '๐ฅฐ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คช', '๐คจ', '๐ง', '๐ค','๐'],
    ['๐', '๐คฉ', '๐ฅณ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', 'โน๏ธ', '๐ฃ', '๐', '๐ซ', '๐ฉ','๐ฎ'],
    ['๐ฅบ', '๐ข', '๐ญ', '๐ค', '๐ ', '๐ก', '๐คฌ', '๐คฏ', '๐ณ', '๐ฅต', '๐ฅถ', '๐ฑ', '๐จ', '๐ฐ', '๐ฅ','๐บ'],
    ['๐', '๐ค', '๐ค', '๐คญ', '๐คซ', '๐คฅ', '๐ถ', '๐', '๐', '๐ฌ', '๐', '๐ฏ', '๐ฆ', '๐ง', '๐ฎ','๐งฟ'],
    ['๐ฒ', '๐ฅฑ', '๐ด', '๐คค', '๐ช', '๐ต', '๐ค', '๐ฅด', '๐คข', '๐คฎ', '๐คง', '๐ท', '๐ค', '๐ค', '๐ค','๐งบ'],
    ['๐ถ', '๐ค ', '๐', '๐ฟ', '๐น', '๐บ', '๐คก', '๐', '๐ป', 'โ ๏ธ', '๐ฝ', '๐', '๐ข', '๐', '๐ฆ', '๐ฆ','๐'],
    ['๐ฆ', '๐ฆ', '๐ก', '๐ ', '๐', '๐ฌ', '๐ณ', '๐', '๐ฆ', '๐', '๐ช', '๐', '๐ซ', '๐', '๐','โ๏ธ'],
    ['๐', '๐', '๐', '๐ฆ', '๐', '๐ฆ', '๐', '๐ฉ', '๐ท', '๐ธ', '๐', '๐', '๐ฆ', '๐ฆ', '๐ฆ','๐งง'],
    ['๐ฆข', '๐ฆฉ', '๐', '๐', '๐ฆ', '๐ฆจ', '๐ฆก', '๐ฆฆ', '๐ฆฅ', '๐', '๐', '๐ฟ', '๐ฆ', '๐', '๐ฒ','๐ง'],
    ['๐ต', '๐', '๐ฒ', '๐ณ', '๐ด', '๐ฑ', '๐ฟ', 'โ๏ธ', '๐', '๐', '๐', '๐', '๐', '๐', '๐','๐ค'],
    ['๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฑ', '๐ป', 'โ๏ธ', 'โจ๏ธ', '๐ฅ', '๐จ','๐ฆ'],
    ['๐ท', '๐ธ', '๐น', '๐', '๐ก', '๐', 'โ๏ธ', '๐ฃ', '๐', 'โ๏ธ', '๐งฒ', '๐', '๐ฌ', '๐ญ', '๐งฌ','๐'],
    ['๐', '๐', '๐', '๐', '๐', '๐ฆ', '๐ฌ', '๐ฏ', '๐', '๐งฎ', 'โฏ๏ธ', 'โข๏ธ', 'โฃ๏ธ', '๐ง', '๐ฎ','๐ต'],
    ['ใ๏ธ', '๐ฎ', '๐', '๐', 'โ๏ธ', '๐ฆ', 'โผ๏ธ', 'โ๏ธ', 'โ ๏ธ', '๐ฐ', 'โป๏ธ', '๐', '๐ ', '๐', '๐ต','๐ฏ'],
    ['๐จ', '๐ผ', '๐ป', '๐ฆ', '๐ฐ', '๐น', '๐ญ', '๐ฑ', '๐ถ', '๐ฅฝ', '๐', '๐', '๐ฉ', '๐จ', 'โฝ๏ธ','๐ค'],
]
function emojiLen(e) { 
    for(let i=0;; i++) { 
      if(isNaN(e.charCodeAt(i))) { return i } 
    }
}
for (let i = 0; i < emojies.length; i++) {
    for (const e of emojies[i]) {
        if(emojiLen(e)!=2){
            console.log('Ne validno emoji',e);
        }
    }
    
}
function asbytes(s) {
    let bs = Buffer.from(s);
    let ars = [];
    for (let e of bs) {
        ars.push(e);
    }
    return ars;
}
function frombytes(ars) {
    let bs = Buffer.alloc(ars.length);
    for (let i in ars) {
        bs[i] = ars[i];
    }
    return bs.toString();
}

function encode(s, key) {
    // let key = await rl.question('key is ');
    const emojies2 = shuffle(key);
    let ns = '';
    let bytes = asbytes(s);
    console.log(s);
    for (let i = 0; i < bytes.length; i++) {
        let key1 = parseInt(bytes[i] / 16);
        let key2 = (bytes[i] % 16);
        ns += emojies2[key1][key2];
    }
    console.log('encode is', ns);
    return ns;
}
function decodeemoj(emoji, emojies) {
    for (const i in emojies) {
        let key1 = i;
        let key2 = emojies[i].indexOf(emoji);
        // console.log(key2,key1,emoji);
        if (key2 !== -1) {
            return key1 * 16 + key2;
        }
    }
}
function decode(s, key) {
    // let key = await rl.question('key is ');
    const emojies2 = shuffle(key);
    let ns = [];
    for (let i = 0; i < s.length; i += 2) {
        ns.push(decodeemoj(s[i] + s[i + 1], emojies2));
    }
    console.log('decode is', frombytes(ns));
    return frombytes(ns);
}

function shuffle1(key, emojies) {
    let emojies2 = [];
    for (const e of emojies) {
        emojies2.push([...e]);
    }
    let bk = asbytes(key);
    for (const e of bk) {
        let row = parseInt(e / 16);
        let koll = (e % 16);
        for (const key in emojies2) {
            emojies2[key] = cutarray(emojies2[key], koll);
        }
        emojies2 = cutarray(emojies2, row);

    }
    return emojies2;
}
function shuffle(key) {
    return shuffle1(key,
        shuffle1(key,
            shuffle1(key,
                shuffle1(key,
                    shuffle1(key, emojies)
                )
            )
        )
    )
}

function cutarray(arr, n) {
    const a1 = arr.slice(0, n);
    const a2 = arr.slice(n);
    return a2.concat(a1);
}


module.exports={decode,encode}
