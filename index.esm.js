const emojiPool = {
  happy: ['=‿=✧', '●ω●', '(/ ▽ \\)', '(=・ω・=)', '(●\'◡\'●)ﾉ♥', '<(▰˘◡˘▰)>', '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄', '(ง,,• ᴗ •,,)ง ✧'],
  shock: ['Σ( ° △ °|||)︴', '┌( ಠ_ಠ)┘', '(ﾟДﾟ≡ﾟдﾟ)!?', '∑(っ °Д °;)っ'],
  sad: ['＞︿＜', '＞△＜', '●︿●', '(´；ω；`)', ',,Ծ‸Ծ,,'],
  helpless: ['◐▽◑', 'ʅ（´◔౪◔）ʃ', '_(:3 」∠)_', '_(┐「ε:)_', '(/・ω・＼)', '(°▽°)ﾉ', '_(•̀ᴗ•́ 」∠)_', '_(•̀ᴗ•́ 」∠ ❀)_', '←◡←', '(･∀･)']
}

const getOne = (type) => {
  return emojiPool[type][Math.floor(Math.random() * emojiPool[type].length)]
}

const happy = () => getOne('happy')
const shock = () => getOne('shock')
const sad = () => getOne('sad')
const helpless = () => getOne('helpless')

export {
  happy,
  shock,
  sad,
  helpless
}
