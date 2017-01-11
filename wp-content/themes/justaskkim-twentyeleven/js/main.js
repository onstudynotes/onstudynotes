function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

function populate(itemName) {
  var rss_url = "https://api.rss2json.com/v1/api.json?api_key=vel0jwv2fjikhgsgke4fvqdcvpuftkzv76wukzva&rss_url=" + document.getElementsByClassName(itemName)[0].getAttribute('rss_url');
  console.log(rss_url);
  getJSON(rss_url, function(err, data) {
    var b = document.getElementById("post_results1");
    b.innerHTML = "";
    var j = document.createElement("ul");
    h = data.items;

    if (h.length == 0) {
      var a = document.createElement("li");
      var m = "No Notes here! 😢  Consider submitting some?";
      var g = '';
      var f = document.createTextNode(g);
      var l = document.createElement("a");
      l.setAttribute("href", 'http://onstudynotes.com/submit');
      l.setAttribute("target", "_top");
      var n = document.createTextNode(m);
      l.appendChild(n);
      a.appendChild(l);
      var k = document.createElement("p");
      k.appendChild(f);
      j.appendChild(a)
    } else {
      for (var e = 0; e < h.length; e++) {
          var a = document.createElement("li");
          var m = h[e].title;
          var g = h[e].contentSnippet;
          var f = document.createTextNode(g);
          var l = document.createElement("a");
          l.setAttribute("href", h[e].link);
          l.setAttribute("target", "_top");
          var n = document.createTextNode(m);
          l.appendChild(n);
          a.appendChild(l);
          var k = document.createElement("p");
          k.appendChild(f);
          j.appendChild(a)
      }
    }
    b.appendChild(j)
  });
}

window.onload = function() {
    populate("post_results");
};
