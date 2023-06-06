// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable no-use-before-define */
var questionContainer = document.getElementById('question');
var nextQuestionButton = document.getElementById('next-question');
var interviewQuestions = [{
  question: 'Why do you want to work for the company?'
}, {
  question: 'Why do you want to leave your current/last company?'
}, {
  question: 'What are you looking for in your next role?'
}, {
  question: 'Tell me about a time when you had a conflict with a co-worker.'
}, {
  question: 'Tell me about a time in which you had a conflict and needed to influence somebody else.'
}, {
  question: 'What project are you currently working on?'
}, {
  question: 'What is the most challenging aspect of your current project?'
}, {
  question: 'What was the most difficult bug that you fixed in the past 6 months?'
}, {
  question: 'How do you tackle challenges? Name a difficult challenge you faced while working on a project, how you overcame it, and what you learned.'
}, {
  question: 'What are you excited about?'
}, {
  question: 'What frustrates you?'
}, {
  question: 'Imagine it is your first day here at the company. What do you want to work on? What features would you improve on?'
}, {
  question: "What are the most interesting projects you have worked on and how might they be relevant to this company's environment?"
}, {
  question: 'Tell me about a time you had a disagreement with your manager.'
}, {
  question: 'Talk about a project you are most passionate about, or one where you did your best work.'
}, {
  question: 'What does your best day of work look like?'
}, {
  question: 'What is something that you had to push for in your previous projects?'
}, {
  question: 'What is the most constructive feedback you have received in your career?'
}, {
  question: 'What is something you had to persevere at for multiple months?'
}, {
  question: 'Tell me about a time you met a tight deadline.'
}, {
  question: 'If this were your first annual review with our company, what would I be telling you right now?'
}, {
  question: "Time management has become a necessary factor in productivity. Give an example of a time-management skill you've learned and applied at work."
}, {
  question: "Tell me about a problem you've had getting along with a work associate."
}, {
  question: 'What aspects of your work are most often criticized?'
}, {
  question: 'How have you handled criticism of your work?'
}, {
  question: 'What strengths do you think are most important for your job position?'
}, {
  question: 'What words would your colleagues use to describe you?'
}, {
  question: 'What would you hope to achieve in the first six months after being hired?'
}, {
  question: 'Tell me why you will be a good fit for the position.'
}];
questionContainer.textContent = 'Click "Next Question" to start the interview';
function standby() {
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  }).then(function (stream) {
    videoElement.srcObject = stream;
  }).catch(function (error) {
    // eslint-disable-next-line no-console
    console.error('Error accessing media devices:', error);
  });
}
standby();
function nextQuestion() {
  if (interviewQuestions.length === 0) {
    questionContainer.textContent = 'Finished all questions';
    return;
  }
  var randomIndex = Math.floor(Math.random() * interviewQuestions.length);
  var question = interviewQuestions[randomIndex].question;
  interviewQuestions.splice(randomIndex, 1);
  questionContainer.textContent = question;
  readQuestionAloud();
}
var videoElement = document.getElementById('video');
var startRecordingButton = document.getElementById('start-recording');
var stopRecordingButton = document.getElementById('stop-recording');
var mediaRecorder;
var recordedChunks = [];
startRecordingButton.addEventListener('click', startRecording);
stopRecordingButton.addEventListener('click', stopRecording);
function handleDataAvailable(event) {
  recordedChunks.push(event.data);
}
var questionElement = document.getElementById('question');
function readQuestionAloud() {
  var questionText = questionElement.textContent;
  var speech = new SpeechSynthesisUtterance(questionText);
  speechSynthesis.speak(speech);
}
var isRecording = false;
function startRecording() {
  if (!isRecording) {
    isRecording = true;
    recordedChunks = [];
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    }).then(function (stream) {
      var combinedStream = new MediaStream([].concat(_toConsumableArray(stream.getAudioTracks()), _toConsumableArray(stream.getVideoTracks())));
      videoElement.srcObject = stream;
      mediaRecorder = new MediaRecorder(combinedStream);
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.start();
      toggleButtonStates();
    }).catch(function (error) {
      // eslint-disable-next-line no-console
      console.error('Error accessing media devices:', error);
    });
  }
}
function stopRecording() {
  if (isRecording && mediaRecorder && mediaRecorder.state !== 'inactive') {
    isRecording = false;
    mediaRecorder.stop();
    toggleButtonStates();
    setTimeout(function () {
      var blob = new Blob(recordedChunks, {
        type: 'video/webm'
      });
      var url = URL.createObjectURL(blob);
      videoElement.src = url;
      videoElement.srcObject = null;
    }, 1000);
  }
}
function toggleButtonStates() {
  startRecordingButton.classList.toggle('disabled');
  stopRecordingButton.classList.toggle('disabled');
  stopRecordingButton.ariaDisabled = !stopRecordingButton.ariaDisabled;
  // nextQuestionButton.classList.toggle('disabled');
}

nextQuestionButton.addEventListener('click', function () {
  nextQuestion();
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52322" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map