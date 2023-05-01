//timer and setup
window.onload=function(){
  var count = 5;
  var id = setInterval(function(){
    count--;
    document.querySelector('#timer').textContent=count;
    if(count <= 0) {
      clearInterval(id);
      removeTimer();
      setUpGame();
    }
  },1000);
};

const song = {
  songTitle: "Twinkle Twinkle Little Star",
  hand: "right",
  songLength: "16",
  time: "20",
  position1: {
      sound1: {
          tone: "C",
          line: "-6"
      }
  },
  position2: {
      sound1: {
          tone: "C",
          line: "-6"
      }
  },
  position3: {
      sound1: {
          tone: "G",
          line: "0"
      }
  },
  position4: {
      sound1: {
          tone: "G",
          line: "0"
      }
  },
  position5: {
      sound1: {
          tone: "A",
          line: "1.5"
      }
  },
  position6: {
      sound1: {
          tone: "A",
          line: "1.5"
      }
  },
  position7: {
      sound1: {
          tone: "G",
          line: "0"
      }
  },
  position8: {
      sound1: {
          tone: "none",
          line: ""
      }
  },
  position9: {
      sound1: {
          tone: "F",
          line: "-1.5"
      }
  },
  position10: {
      sound1: {
          tone: "F",
          line: "-1.5"
      }
  },
  position11: {
      sound1: {
          tone: "E",
          line: "-3"
      }
  },
  position12: {
      sound1: {
          tone: "E",
          line: "-3"
      }
  },
  position13: {
      sound1: {
          tone: "D",
          line: "-4.5"
      }
  },
  position14: {
      sound1: {
          tone: "D",
          line: "-4.5"
      }
  },
  position15: {
      sound1: {
          tone: "C",
          line: "-6"
      }
  },
  position16: {
      sound1: {
          tone: "none",
          line: ""
      }
  },
};

var songLength = song.songLength;
var time = song.time;
var scoreNo = 1; 
var countTime = 0;
var id = setInterval(function(){
  countTime++;
  if (countTime <= 2) {  
  }else if (2 < countTime & scoreNo <= songLength){
    var score = song["position" + scoreNo];
    for(var elem in score){
      var scene = document.querySelector('a-scene');
      addKey(scene, score[elem]);
      scoreNo++;
    }
  }
  if (scoreNo > songLength & countTime > time){
    clearInterval(id);
    window.location.href = './clear.html';
  }
},1000);

function setUpGame(){
  var scene = document.querySelector('a-scene');
    // where piano key is
    var horizontalLine = document.createElement('a-plane');
    horizontalLine.setAttribute('position', '0 0 3');
    horizontalLine.setAttribute('rotation', '-90 0 0');
    horizontalLine.setAttribute('width', '30');
    horizontalLine.setAttribute('height', '0.15');
    horizontalLine.setAttribute('color', '#7BC8A4');
    scene.appendChild(horizontalLine);

    // floating line to push
    var verticalLine1 = document.createElement('a-plane');
    verticalLine1.setAttribute('position', '0 0 -4.5');
    verticalLine1.setAttribute('rotation', '-90 0 0');
    verticalLine1.setAttribute('width', '0.15');
    verticalLine1.setAttribute('height', '15');
    verticalLine1.setAttribute('color', '#7BC8A4');

    var verticalLine2 = document.createElement('a-plane');
    verticalLine2.setAttribute('position', '1.5 0 -4.5');
    verticalLine2.setAttribute('rotation', '-90 0 0');
    verticalLine2.setAttribute('width', '0.15');
    verticalLine2.setAttribute('height', '15');
    verticalLine2.setAttribute('color', '#7BC8A4');

    var verticalLine3 = document.createElement('a-plane');
    verticalLine3.setAttribute('position', '3 0 -4.5');
    verticalLine3.setAttribute('rotation', '-90 0 0');
    verticalLine3.setAttribute('width', '0.15');
    verticalLine3.setAttribute('height', '15');
    verticalLine3.setAttribute('color', '#7BC8A4');

    var verticalLine4 = document.createElement('a-plane');
    verticalLine4.setAttribute('position', '4.5 0 -4.5');
    verticalLine4.setAttribute('rotation', '-90 0 0');
    verticalLine4.setAttribute('width', '0.15');
    verticalLine4.setAttribute('height', '15');
    verticalLine4.setAttribute('color', '#7BC8A4');

    var verticalLine5 = document.createElement('a-plane');
    verticalLine5.setAttribute('position', '-1.5 0 -4.5');
    verticalLine5.setAttribute('rotation', '-90 0 0');
    verticalLine5.setAttribute('width', '0.15');
    verticalLine5.setAttribute('height', '15');
    verticalLine5.setAttribute('color', '#7BC8A4');

    var verticalLine6 = document.createElement('a-plane');
    verticalLine6.setAttribute('position', '-3 0 -4.5');
    verticalLine6.setAttribute('rotation', '-90 0 0');
    verticalLine6.setAttribute('width', '0.15');
    verticalLine6.setAttribute('height', '15');
    verticalLine6.setAttribute('color', '#7BC8A4');

    var verticalLine7 = document.createElement('a-plane');
    verticalLine7.setAttribute('position', '-4.5 0 -4.5');
    verticalLine7.setAttribute('rotation', '-90 0 0');
    verticalLine7.setAttribute('width', '0.15');
    verticalLine7.setAttribute('height', '15');
    verticalLine7.setAttribute('color', '#7BC8A4');

    var verticalLine8 = document.createElement('a-plane');
    verticalLine8.setAttribute('position', '-6 0 -4.5');
    verticalLine8.setAttribute('rotation', '-90 0 0');
    verticalLine8.setAttribute('width', '0.15');
    verticalLine8.setAttribute('height', '15');
    verticalLine8.setAttribute('color', '#7BC8A4');

    scene.appendChild(verticalLine1);
    scene.appendChild(verticalLine2);
    scene.appendChild(verticalLine3);
    scene.appendChild(verticalLine4);
    scene.appendChild(verticalLine5);
    scene.appendChild(verticalLine6);
    scene.appendChild(verticalLine7);
    scene.appendChild(verticalLine8);
}

function addKey(scene, score){
  //key
  var pose = "none";
  if(score.tone == pose){
    stopSec(2);
  }else{
    var key = document.createElement('a-plane');
    key.setAttribute('position', score.line + ' 0.1 -9');
    key.setAttribute('rotation', '-90 0 0');
    key.setAttribute('width', '0.3');
    key.setAttribute('height', '2');
    key.setAttribute('color', '#ff69b4');
    key.setAttribute('animation', 'property: position; to: ' + score.line + ' 0.25 2; dur: 2000; easing: linear; loop: false');
    key.setAttribute('id', 'key-1');
    scene.appendChild(key);
    var length = 2;
    var id = setInterval(function(){
      length--;
      if(length <= 0) {
        clearInterval(id);
        scene.removeChild(key);
      }
    },1000);
  }
}

function removeTimer(){
    var e = document.getElementById('container');
    if (e) {
      e.parentNode.removeChild(e);
    }
};

function stopSec(sec){
  var position = sec;
  var id = setInterval(function(){
    position--;
    if(position <= 0) {
      clearInterval(id);
    }
  },1000);
};
