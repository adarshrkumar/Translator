let dl = [
  'Detect Language', 
  'auto', 
]
let slS = [
  'Afrikaans', 
  'Albanian', 
  'Amharic', 
  'Arabic', 
  'Armenian', 
  'Assamese', 
  'Aymara', 
  'Azerbaijani', 
  'Bambara', 
  'Basque', 
  'Belarusian', 
  'Bengali', 
  'Bhojpuri', 
  'Bosnian', 
  'Bulgarian', 
  'Catalan', 
  'Cebuano', 
  'Chichewa', 
  'Chinese (Simplified)', 
  'Chinese (Traditional)', 
  'Corsican', 
  'Croatian', 
  'Czech', 
  'Danish', 
  'Dhivehi', 
  'Dogri', 
  'Dutch', 
  'English', 
  'Esperanto', 
  'Estonian', 
  'Ewe', 
  'Filipino', 
  'Finnish', 
  'French', 
  'Frisian', 
  'Galician', 
  'Georgian', 
  'German', 
  'Greek', 
  'Guarani', 
  'Gujarati', 
  'Haitian Creole', 
  'Hausa', 
  'Hawaiian', 
  'Hebrew', 
  'Hindi', 
  'Hmong', 
  'Kannada', 
  'Hungarian', 
  'Icelandic', 
  'Igbo', 
  'Ilocano', 
  'Indonesian', 
  'Irish', 
  'Italian', 
  'Japanese', 
  'Javanese', 
  'Kannada', 
  'Kazakh', 
  'Khmer', 
  'Kinyarwanda', 
  'Konkani', 
  'Korean', 
  'Krio', 
  'Kurdish (Kurmanji)', 
  'Kurdish (Sorani)', 
  'Kyrgyz', 
  'Lao', 
  'Latin', 
  'Latvian', 
  'Lingala', 
  'Lithuanian', 
  'Luganda', 
  'Luxembourgish', 
  'Macedonian', 
  'Maithili', 
  'Malagasy', 
  'Malay', 
  'Malayalam', 
  'Maltese', 
  'Maori', 
  'Marathi', 
  'Meiteilon (Manipuri)', 
  'Mizo', 
  'Mongolian', 
  'Myanmar (Burmese)', 
  'Nepali', 
  'Norwegian', 
  'Odia (Oriya)', 
  'Oromo', 
  'Pashto', 
  'Persian', 
  'Polish', 
  'Portuguese', 
  'Punjabi', 
  'Quechua', 
  'Romanian', 
  'Russian', 
  'Samoan', 
  'Sanskrit', 
  'Scots Gaelic', 
  'Sepedi', 
  'Serbian', 
  'Sesotho', 
  'Shona', 
  'Sindhi', 
  'Sinhala', 
  'Slovak', 
  'Slovenian', 
  'Somali', 
  'Spanish', 
  'Sundanese', 
  'Swahili', 
  'Swedish', 
  'Tajik', 
  'Tamil', 
  'Tatar', 
  'Telugu', 
  'Thai', 
  'Tigrinya', 
  'Tsonga', 
  'Turkish', 
  'Turkmen', 
  'Twi', 
  'Ukrainian', 
  'Urdu', 
  'Uyghur', 
  'Uzbek', 
  'Vietnamese', 
  'Welsh', 
  'Xhosa', 
  'Yiddish', 
  'Yoruba', 
  'Zulu', 
]

let slKs = [
  'af', 
  'sq', 
  'am', 
  'ar', 
  'hy', 
  'as', 
  'ay', 
  'az', 
  'bm', 
  'eu', 
  'be', 
  'bn', 
  'bho', 
  'bo', 
  'bg', 
  'ca', 
  'ceb', 
  'ny', 
  'zh-CN', 
  'zh-TW', 
  'co', 
  'hr', 
  'cs', 
  'da', 
  'dv', 
  'doi', 
  'nl', 
  'en', 
  'eo', 
  'et', 
  'ee', 
  'tl', 
  'fi', 
  'fr', 
  'fy', 
  'ga', 
  'ka', 
  'de', 
  'el', 
  'gn', 
  'gu', 
  'ht', 
  'ha', 
  'haw', 
  'iw', 
  'hi', 
  'hmn', 
  'ka', 
  'hu', 
  'is', 
  'ig', 
  'ilo', 
  'id', 
  'ga', 
  'it', 
  'ja', 
  'jw', 
  'kn', 
  'kk', 
  'km', 
  'rw', 
  'gom', 
  'ko', 
  'kri', 
  'ku', 
  'ckb', 
  'ky', 
  'lo', 
  'la', 
  'lv', 
  'ln', 
  'lt', 
  'lg', 
  'lb', 
  'mk', 
  'mai', 
  'mg', 
  'ms', 
  'ml', 
  'mt', 
  'mi', 
  'mr', 
  'mni-Mtei', 
  'lus', 
  'mn', 
  'my', 
  'ne', 
  'no', 
  'or', 
  'om', 
  'pa', 
  'fa', 
  'pl', 
  'pt', 
  'pu', 
  'qu', 
  'ro', 
  'ru', 
  'sm', 
  'sa', 
  'gd', 
  'nso', 
  'sr', 
  'st', 
  'sn', 
  'sd', 
  'si', 
  'sk', 
  'sl', 
  'so', 
  'es', 
  'su', 
  'sw', 
  'sv', 
  'tg', 
  'ta', 
  'tt', 
  'te', 
  'th', 
  'ti', 
  'ts', 
  'tr', 
  'tk', 
  'ak', 
  'uk', 
  'ur', 
  'ug', 
  'uz', 
  'vi', 
  'cy', 
  'xh', 
  'yi', 
  'yo', 
  'zu', 
]

function doL(isTl) {
  let inps = slS
  let out = ''
  inps.forEach(inp => {
    let isSelected = ''
    if (isTl === false && Boolean(localStorage.getItem('sl')) !== false) {
      isSelected = ' selected'
    }
    else if (inp === 'Detect Language' && isTl === false) {
      isSelected = ' selected'
    }
    else if (isTl === true && Boolean(localStorage.getItem('tl')) !== false) {
      isSelected = ' selected'
    }
    else if (inp === 'English' && isTl === true) {
      isSelected = ' selected'
    }
    out = out + `<option${isSelected}>${inp}</option>`
  })
  return out
}

let slElement = document.getElementsByName('sl')[0]
let tlElement = document.getElementsByName('tl')[0]
slElement.innerHTML = '<option>' + dl[0] + '</option>' + doL(false)
tlElement.innerHTML = doL(true)
if (Boolean(localStorage.getItem('text')) !== false) {
  document.getElementsByName('text')[0].value = localStorage.getItem('text')
}

function go() {
  var sl = document.getElementsByName('sl')[0].value
  let slA
  let i = 0
  slS.forEach(sL => {
    if (sL === sl && sl !== 'Detect Language') {
      slA = slKs[i]
    }
    else if (sl === 'Detect Language') {
      slA = dl[1]
    }
    i++
  })
  var tl = document.getElementsByName('tl')[0].value
  let text = document.getElementsByName('text')[0].value
  localStorage.setItem('sl', sl)
  localStorage.setItem('tl', tl)
  localStorage.setItem('text', text)
  if (text !== '') {
    location.href = `/translate?sl=${sl}&tl=${tl}&text=${text}`
  }
}

function reset() {
  localStorage.removeItem('sl')
  localStorage.removeItem('tl')
  localStorage.removeItem('text')
  document.getElementsByName('sl')[0].value = 'Detect Language'
  document.getElementsByName('tl')[0].value = 'English'
  document.getElementsByName('text')[0].value = ''
//  location.href = '/'
}