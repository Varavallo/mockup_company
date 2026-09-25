/* ------------------------------------------------------------------
   Email address: change the two parts below.
   The address is assembled here instead of being written in the HTML,
   which stops the simplest spam harvesters.
   ------------------------------------------------------------------ */
var EMAIL_USER = "giuseppe.varavallo";
var EMAIL_DOMAIN = "unito.it";

(function () {
  "use strict";
  var address = EMAIL_USER + "@" + EMAIL_DOMAIN;

  var links = document.querySelectorAll(".js-email");
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var subject = a.getAttribute("data-subject");
    a.href = "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }

  var labels = document.querySelectorAll(".js-email-text");
  for (var j = 0; j < labels.length; j++) labels[j].textContent = address;
})();
