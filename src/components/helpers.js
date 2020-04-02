import moment from "moment";

const axios = require("axios").default;

const helpers = {
  classify: function(str) {
    return str.replace(/\W/g, "-").toLowerCase();
  },
  capFirstLetter: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  formatPhone: function(str) {
    return str.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2-$3");
  },
  getMiles: function(meters) {
    return parseInt(meters * 0.000621371192);
  },
  formatMonthYear: function(str) {
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    let test = str.replace(/-/g, "/");
    let hack = moment(new Date(test));
    let reform = moment(hack).format();
    return moment(reform).format(
      '[<div class="m">]MMM[</div> <div class="y">]YYYY[</div>]'
    );
  },
  shuffle: function(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  hasClass: function(element, className) {
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
  },
  getRandom: function(max) {
    let result = max === 1 ? Math.random() : Math.floor(Math.random() * max);
    return result;
  },
  twinkleTwinkle: function(score, max) {
    let stars = "";
    let p = score;
    let p2 = score - 1;
    let spread = [];

    p % 2 === 0
      ? (spread = [p / 2, 0, max - p / 2])
      : (spread = [p2 / 2, 1, max - 1 - p2 / 2]);

    let full = 0;
    while (full < spread[0]) {
      stars += '<i class="fas full-star"></i>';
      full++;
    }
    let half = 0;
    while (half < spread[1]) {
      stars += '<i class="fas half-star"></i>';
      half++;
    }
    let empty = 0;
    while (empty < spread[2]) {
      stars += '<i class="far empty-star"></i>';
      empty++;
    }
    return stars;
  },
  allParsed: "",
  childCounter: 0,
  parseOmatic: function(obj) {
    var parsed = "";
    for (var key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        //var size = Object.keys(myObj).length;
        //console.log("Kids: " + Object.keys(obj[key]).length);
        this.childCounter = Object.keys(obj[key]).length;
        var parsedObj = "";
        parsedObj +=
          '<dt class="sub-head ' +
          key +
          '">' +
          key +
          '</dt><dd class="sub-head ' +
          key +
          '">...</dd>';
          this.allParsed += parsedObj;
        this.parseOmatic(obj[key]);
      } else {
        var parsedItem = "";
        var hasParent = this.childCounter > 0 ? " has-parent" : "";
        parsedItem +=
          '<dt class="' +
          key + hasParent +
          '">' +
          key +
          '</dt><dd class="' +
          key + hasParent +
          '">' +
          obj[key] +
          "</dd>";
          this.allParsed += parsedItem;
          this.childCounter--;
      }
    }
    return this.allParsed;
    this.allParsed = "";
  },
  getScreenData: function() {
    var screenData = {};
    function gcd(a, b) {
      if (a == b) {
        return a;
      } else if (a > b) {
        return gcd(a - b, b);
      } else {
        return gcd(a, b - a);
      }
    }
    var devicePixelRatio = window.devicePixelRatio || 1;
    var sw = window.screen.width * devicePixelRatio;
    var sh = window.screen.height * devicePixelRatio;
    var cd = window.screen.colorDepth;
    var div = gcd(sw, sh);
    var wd = sw / div;
    var hd = sh / div;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    // aspect ratios
    var sr = Math.round((100 * sw) / sh) / 100; // screen
    var wr = Math.round((100 * ww) / wh) / 100; // window

    screenData = {
      "device-width": sw,
      "device-height": sh,
      "screen-aspect-width": wd,
      "screen-aspect-height": hd,
      "screen-aspect-ratio": sr,
      "screen-color-depth": cd,
      "window-width": ww,
      "window-height": wh,
      "window-ratio": wr
    };
    //this.parseOmatic(screenData, $('.ua-parsed'));
    return screenData;
  }
};

export default helpers;
