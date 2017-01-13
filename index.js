/**
 * I need a Japanese style emoji!
 * By LancerComet at 20:32, 2017.01.13.
 * # Carry Your World #
 * 
 * @author: LancerComet
 * @license: MIT
 */
const emojiPool = {
  happy: ['=‿=✧', '●ω●', '(/ ▽ \\)', '(=・ω・=)', '(●\'◡\'●)ﾉ♥', '<(▰˘◡˘▰)>', '⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄', '(ง,,• ᴗ •,,)ง ✧'],
  shock: ['Σ( ° △ °|||)︴', '┌( ಠ_ಠ)┘', '(ﾟДﾟ≡ﾟдﾟ)!?', '∑(っ °Д °;)っ'],
  sad: ['＞︿＜', '＞△＜', '●︿●', '(´；ω；`)', ',,Ծ‸Ծ,,'],
  helpless: ['◐▽◑', 'ʅ（´◔౪◔）ʃ', '_(:3 」∠)_', '_(┐「ε:)_', '(/・ω・＼)', '(°▽°)ﾉ', '_(•̀ᴗ•́ 」∠)_', '_(•̀ᴗ•́ 」∠ ❀)_', '←◡←', '(･∀･)']
}

const exportObj = {}

Object.keys(emojiPool).forEach(type => {
  exportObj[type] = getEmoji.bind(null, type)
})

module.exports = exportObj

/**
 * Get an emoji randomly.
 * 
 * @returns {string}
 */
function getEmoji (type) {
  return emojiPool[type][Math.floor(Math.random() * emojiPool[type].length)]
}
