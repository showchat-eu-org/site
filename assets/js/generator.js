/*!
 * KiwiIRC RomaniaChat.Eu Generator v2.0
 * https://showchat.eu.org ShowChat
 * Author: Oscar IRC Nick: BaiatRau on RomaniaChat
 * Released under the MIT License
 */

function generateCode() {
  let nick = document.getElementById('nick').value;
  const channels = document.getElementById('channels').value;
  const template = document.getElementById('templates').value;
  const height = document.getElementById('height').value;
  const width = document.getElementById('width').value;
  
  const server = document.getElementById('server').value;
 

  // Verificați dacă nu este furnizată o poreclă și atribuiți-o pe cea implicită
  if (!nick.trim()) {
    nick = 'ShowChat';
  }

  // Adăugați sufix la porecla
  const nickConSufijo = nick + "_?";

  const chatUrl = `https://${server}/?theme=${template}&nick=${nickConSufijo}&chan=${channels},#ShowChat`;

  const code = `<iframe src="${chatUrl}" width="${width}" height="${height}" scrolling="no" frameborder="0"></iframe>`;

  document.getElementById('code').value = code;
}
function previewCode() {
  const previewContainer = document.getElementById('preview-container');
  const code = document.getElementById('code').value;

  // Curățați recipientul înainte de a adăuga noua previzualizare
  previewContainer.innerHTML = '';

  // Adăugați noua previzualizare
  previewContainer.insertAdjacentHTML('beforeend', '<p>Acesta este un exemplu de previzualizare a modului în care va arăta chatul dvs. pe pagina dvs. web:</p>');
  previewContainer.insertAdjacentHTML('beforeend', code);
}