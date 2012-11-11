// JavaScript Document

onload = function() {
  draw();
};
function draw() {
  var canvas = document.getElementById('canvas');
    canvas.width = 1000;
    canvas.height = 750;
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  /* Imageオブジェクトを生成 */
  var img = new Image();
  img.src = "img/title.jpg?" + new Date().getTime();

  /* 画像が読み込まれるのを待ってから処理を続行 */
 	img.onload = function() {
    ctx.drawImage(img, 250, 100); 
  } 
    var img2 = new Image();
  img2.src = "img/start.jpg?" + new Date().getTime();
    img2.onload = function() {
    ctx.drawImage(img2, 250, 300); 
  }
 }
 

