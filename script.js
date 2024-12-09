var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

let page = location.href
if (!!location.href.includes('%3D') === true) {
  location.href = location.href.replace('%3D', '=')
}
if (!!location.href.includes('%26') === true) {
  location.href = location.href.replace('%26', '&')
}
var sl = urlParams.get('sl')
var tl = urlParams.get('tl')
var text = urlParams.get('text')
if (!!sl && !!tl && !!text) {
  location.href = `/translate?sl=${sl}&tl=${tl}&text=${text}`
}
else {
  document.body.setAttribute('style', '')
}
