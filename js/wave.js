//require('dotenv').config();
const cards = [["Bad","Good"],
  ["Mildly addictive","Highly addictive"],
  ["Hot","Cold"],
  ["Normal","Weird"],
  ["Colorless","Colorful"],
  ["Low calorie","High calorie"],
  ["Feels bad","Feels good"],
  ["Inessential","Essential"],
  ["Cheap","Expensive"],
  ["Underrated weapon","Overrated weapon"],
  ["Rare","Common"],
  ["Unsexy emoji","Sexy emoji"],
  ["Easy subject","Hard subject"],
  ["Unknown","Famous"],
  ["Difficult to use","Easy to use"],
  ["Tired","Wired"],
  ["Dirty","Clean"],
  ["Requires luck","Requires skill"],
  ["Flavorless","Flavorful"],
  ["Boring topic","Fascinating topic"],
  ["Bad actor","Good actor"],
  ["Basic","Hipster"],
  ["Dangerous job","Safe job"],
  ["Fantasy","Sci-Fi"],
  ["Casual","Formal"],
  ["Underpaid","Overpaid"],
  ["Dry","Wet"],
  ["Underrated skill","Overrated skill"],
  ["Forbidden","Encouraged"],
  ["Sad song","Happy song"],
  ["Fragile","Durable"],
  ["Geek","Dork"],
  ["Good","Evil"],
  ["Worst day of the year","Best day of the year"],
  ["Bad habit","Good habit"],
  ["Cat person","Dog person"],
  ["Guilty pleasure","Openly love"],
  ["Untalented","Talented"],
  ["Dark","Light"],
  ["Underrated actor","Overrated actor"],
  ["Hard to find","Easy to find"],
  ["Ugly man","Beautiful man"],
  ["Hard to remember","Easy to remember"],
  ["Lowbrow","Highbrow"],
  ["Unhealthy","Healthy"],
  ["Bad man","Good man"],
  ["Historically important","Historically irrelevant"],
  ["Hairless","Hairy"],
  ["Inflexible","Flexible"],
  ["Normal pet","Exotic pet"],
  ["Introvert","Extrovert"],
  ["Book was better","Movie was better"],
  ["Bad movie","Good movie"],
  ["Ugly","Beautiful"],
  ["Happens slowly","Happens suddenly"],
  ["Job","Career"],
  ["Loved","Hated"],
  ["The Light Side of the Force","The Dark Side of the Force"],
  ["Bad pizza topping","Good pizza topping"],
  ["Dystopia","Utopia"],
  ["Mature person","Immature person"],
  ["Underrated thing to own","Overrated thing to own"],
  ["Mean person","Nice person"],
  ["Action movie","Adventure movie"],
  ["Mental activity","Physical activity"],
  ["Uncontroversial topic","Controversial topic"],
  ["Need","Want"],
  ["Dry food","Wet food"],
  ["Normal thing to own","Weird thing to own"],
  ["Straight","Curvy"],
  ["Bad person","Good person"],
  ["80s","90s"],
  ["Ethical to eat","Unethical to eat"],
  ["Movie","Film"],
  ["Optional","Mandatory"],
  ["Underrated letter of the alphabet","Overrated letter of the alphabet"],
  ["Ordinary","Extraordinary"],
  ["Hard to pronounce","Easy to pronounce"],
  ["Low quality","High quality"],
  ["Unsexy animal","Sexy animal"],
  ["Plain","Fancy"],
  ["Has a bad reputation","Has a good reputation"],
  ["Poorly made","Well made"],
  ["Not a sandwich","A sandwich"],
  ["Quiet place","Loud place"],
  ["Comedy","Drama"],
  ["Dangerous","Safe"],
  ["Culturally significant","Culturally insignificant"],
  ["Replaceable","Irreplaceable"],
  ["Worst athlete of all time","Greatest athlete of all time"],
  ["Role model","Bad influence"],
  ["Useless major","Useful major"],
  ["Peaceful","Warlike"],
  ["Underrated movie","Overrated movie"],
  ["Rough","Smooth"],
  ["Bad for you","Good for you"],
  ["Round","Pointy"],
  ["Proof that God exists","Proof that God doesn't exist"],
  ["Sad movie","Happy movie"],
  ["Waste of time","Good use of time"],
  ["Scary animal","Nice animal"],
  ["Mainstream","Niche"],
  ["Short lived","Long lived"],
  ["Nobody does it","Everybody does it"],
  ["Smells bad","Smells good"],
  ["Star Wars","Star Trek"],
  ["Snack","Meal"],
  ["Least evil company","Most evil company"],
  ["Soft","Hard"],
  ["Sustenance","Haute cuisine"],
  ["Square","Round"],
  ["Better hot","Better cold"],
  ["Stupid","Brilliant"],
  ["Artisanal","Mass produced"],
  ["Bad superpower","Good superpower"],
  ["Ineffective","Effective"],
  ["Unbelievable","Believable"],
  ["Trashy","Classy"],
  ["Temporary","Permanent"],
  ["Looks like a person","Doesn't look like a person"],
  ["Tastes bad","Tastes good"],
  ["Sport","Game"],
  ["Uncool","Cool"],
  ["Worst living person","Greatest living person"],
  ["Underrated","Overrated"],
  ["Messy food","Clean food"],
  ["Unethical","Ethical"],
  ["Bad gift","Good gift"],
  ["Unfashionable","Fashionable"],
  ["Freedom fighter","Terrorist"],
  ["Unforgiveable","Forgiveable"],
  ["Failure","Masterpiece"],
  ["Harmless","Harmful"],
  ["Gryffindor","Slytherin"],
  ["Unhygienic","Hygienic"],
  ["Bad music","Good music"],
  ["Useless","Useful"],
  ["Movie that Godzilla would ruin","Movie that Godzilla would improve"],
  ["Unimportant","Important"],
  ["Easy to spell","Hard to spell"],
  ["Vice","Virtue"],
  ["Underrated musician","Overrated musician"],
  ["Unpopular activity","Popular activity"],
  ["Divided","Whole"],
  ["Unreliable","Reliable"],
  ["Easy to kill","Hard to kill"],
  ["Unstable","Stable"],
  ["Round animal","Pointy animal"],
  ["Bad TV show","Good TV show"],
  ["Traditionally masculine","Traditionally feminine"],
  ["Useless body part","Useful body part"],
  ["Fad","Classic"],
  ["Weak","Strong"],
  ["Disgusting cereal","Delicious cereal"],
  ["Useless invention","Useful invention"],
  ["Liberal","Conservative"],
  ["Unpopular","Popular"],
  ["Friend","Enemy"],
  ["Boring","Exciting"],
  ["Smelly in a bad way","Smelly in a good way"],
  ["Villain","Hero"],
  ["Underrated thing to do","Overrated thing to do"],
  ["Useless in an emergency","Useful in an emergency"],
  ["For kids","For adults"],
  ["Wise","Intelligent"],
  ["Easy to do","Hard to do"],
  ["Worthless","Priceless"],
  ["Nature","Nurture"],
  ["Dictatorship","Democracy"],
  ["Normal greeting","Weird greeting"],
  ["Dog name","Cat name"],
  ["Non-partisan","Partisan"],
  ["Limited","Infinite"],
  ["Casual event","Formal event"],
  ["Bad investment","Good investment"],
  ["Small talk","Heavy topic"],
  ["Mild","Spicy"],
  ["Religious","Sacrilegious"],
  ["Not art","Art"],
  ["Illegal","Prohibited"],
  ["Popular","Elitist"],
  ["Out of control","In control"],
  ["Quiet","Loud"],
  ["Unsexy PokÃ©mon","Sexy PokÃ©mon"],
  ["Secret","Public knowledge"],
  ["Too small","Too big"],
  ["Short","Long"],
  ["Worst year in history","Best year in history"],
  ["Socialist","Capitalist"],
  ["Little known fact","Well known fact"],
  ["Stationary","Mobile"],
  ["Local issue","Global issue"],
  ["Talent","Skill"],
  ["Worst era to time travel","Best era to time travel"],
  ["The worst","The best"],
  ["Small number","Large number"],
  ["TRUE","FALSE"],
  ["Old fashioned","Avant garde"],
  ["Ugly word","Beautiful word"],
  ["Small","Tiny"],
  ["Unnatural","Natural"],
  ["Genuine person","Phony person"],
  ["Derivative","Original"],
  ["Etiquette","Manners"],
  ["Unsexy color","Sexy color"],
  ["Benefits you","Benefits everyone"],
  ["Powerless","Powerful"],
  ["Doesn't vape","Vapes"],
  ["Fruit","Vegetable"],
  ["Science","Pseudoscience"],
  ["Funny topic","Serious topic"],
  ["Limp","Firm"],
  ["Guilty pleasure","Actually just bad"],
  ["Gossip","News"],
  ["Hard to sit on","Easy to sit on"],
  ["Not enough","Too much"],
  ["Horizontal","Vertical"],
  ["Unscented","Scented"],
  ["Huggable","Not huggable"],
  ["Heterogeneous","Homogenous"],
  ["Inclusive","Exclusive"],
  ["Bad dog breed","Good dog breed"],
  ["Art","Commerce"],
  ["One hit wonder","Pop icon"],
  ["Bad advice","Good advice"],
  ["Tick","Tock"],
  ["Bad candy","Good candy"],
  ["Traditional","Radical"],
  ["Bad mouthfeel","Good mouthfeel"],
  ["Illegal","Legal"],
  ["Deep thought","Shallow thought"],
  ["Bad school","Good school"],
  ["Never on time","Always on time"],
  ["Won't live to 100","Will live to 100"],
  ["Bad Disney character","Good Disney character"],
  ["Similar","Identical"],
  ["Bad president","Good president"],
  ["Weird","Strange"],
  ["Famous","Infamous"],
  ["Least powerful god","Most powerful god"],
  ["Boring person","Fun person"],
  ["Underrated book","Overrated book"],
  ["Conventional wisdom","Fringe belief"],
  ["Worst chore","Best chore"],
  ["Endangered species","Overpopulated species"],
  ["Blue","Green"],
  ["Thrilling","Terrifying"],
  ["Nerd","Jock"],
  ["Expected","Unexpected"],
  ["Person you could beat up","Person who'd beat you up"],
  ["Unreasonable phobia","Reasonable phobia"],
  ["Underrated game","Overrated game"]
];
const tots = {
  current: [],
  draw: [],
  pot: cards,
  discard: [],
  team: true, //team 1-true 2-false
  target: 50,
  score: [0,0],
  round: 0
}
const players = [];
const team = { 
  one: [], 
  two: [],
  psych1: [],
  psych2: []
}


const newPlayerWindow = () => {
  if (tots.round == 0) {
  document.getElementById('modalBG').style.display = 'block';
  document.getElementById('addPlayer').style.display = 'flex'; 
  };
}
const addPlayer = () => {
  if (tots.round == 0) {
    let newPlayer = document.getElementById('newPlayer');
    if (newPlayer.value) {
      players.push(newPlayer.value);
      let newPlayerLine = document.createElement("li");
      newPlayerLine.innerHTML = newPlayer.value;
      if (team.one.length <= team.two.length) { 
        team.one.push(newPlayer.value) 
        let t1 = document.getElementById("t1");
        t1.appendChild(newPlayerLine)
      } else {
        team.two.push(newPlayer.value);
        let t2 = document.getElementById("t2");
        t2.appendChild(newPlayerLine)
      }
    }
  }
  newPlayer.value = '';
  document.getElementById('modalBG').style.display = 'none';
  document.getElementById('addPlayer').style.display = 'none';
  console.log(team) 
}
const getPsych = () => {
  // // let toPsych = 'one'
  // // tots.team ? toPsych = 'one' : toPsych = 'two';
  // let psych;
  // if (tots.team) {
  //   let peeps = team.one.filter(mem => !team.psych1.includes(mem));
  //   peeps.length > 0 ? psych = peeps[Math.floor(Math.random() * peeps.length)] : psych = team.psych1[0];
  // } else {
  //   let peeps = team.two.filter(mem => !team.psych2.includes(mem));
  //   psych = peeps[Math.floor(Math.random() * peeps.length)];
  // }
  // document.getElementById('psychic').innerHTML = psych;
}
const makeTeams = () => {
  if (players.length < 2) {
    console.log('You need more people!');
  } else if (tots.round > 0) {
    console.log('too late, teams set')
  } else {
    team.one = [];
    team.two = [];
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    t1.innerHTML = '';
    t2.innerHTML = ''; 
    let peeps = players.slice(0);
    for (var i = 0; i < players.length; i++) {
      let plyr = peeps.splice(Math.floor(Math.random() * peeps.length),1);
      let newPlayerLine = document.createElement("li");
      newPlayerLine.innerHTML = plyr;
      if (team.one.length <= team.two.length) { 
        team.one.push(plyr);
        t1.appendChild(newPlayerLine);
      } else {
        team.two.push(plyr);
        t2.appendChild(newPlayerLine);
      }
    }
  }
}

const updateGuess = () => {
  let line = document.getElementById('guessLine');
  let input = document.getElementById('tarSlider').value
  line.style.left = input + '%';
}
const updatePrompt = () => {
  let info = document.getElementById('prompt')
  const prompts = [
    'Press Start!',
    'To select a prompt click Draw',
    'Psychic, click randomize, and give a clue',
    'Move the slider to the target and click Guess',
    'Is the target higher, lower, or equal to the guess?',
    ''
  ]
  switch (tots.round) {
    case 0:
      info.innerHTML = prompts[0];
      break;
    case 1:
    case 6:
      info.innerHTML = prompts[1];
      break;
    case 2:
    case 7:
      info.innerHTML = prompts[2];
      break;
    case 3:
    case 8:
      info.innerHTML = prompts[3];
      break;
    case 4:
    case 9:
      info.innerHTML = prompts[4];
      break;
    default:
      info.innerHTML = '';
  }
  // 0   no game
  // 1   t1 psychic chooses prompt
  // 2   t1 psychic sets clue
  // 3   t1 guesses target
  // 4   t2 guesses over under
  // 5   reveal target, update scores, switch teams
  // 6   t2 psychic chooses prompt
  // 7   t2 psychic sets clue
  // 8   t2 guesses target
  // 9   t1 guesses over under
  // 10  reveal target, update scores
}
const updateScore = () => {
  document.getElementById('t1s').innerHTML = tots.score[0];
  document.getElementById('t2s').innerHTML = tots.score[1];
  
}
const lightTog = () => {
  document.getElementsByClassName('turn')[0].classList.toggle('turn')
  let t1g = document.getElementById('t1g');
  let t1r = document.getElementById('t1r');
  let t2g = document.getElementById('t2g');
  let t2r = document.getElementById('t2r');
  if (tots.round > 0 && tots.round < 4) {
    t1g.classList.toggle('turn');
  } else if (tots.round == 4) {
    t2r.classList.toggle('turn');
  } else if (tots.round > 4 && tots.round < 9) {
    t2g.classList.toggle('turn');
  } else if (tots.round > 8) {
    t1r.classList.toggle('turn');
  }
}
const screenTog = () => {
  const allowed = [0,1,2,6,7]
  if (allowed.includes(tots.round)) {
    let screen = document.getElementById('screen')
    screen.offsetWidth == 432 ? screen.style.width = '0%' : screen.style.width = '102%';
    // updatePrompt();
  }
}
const startGame = () => {
  let screen = document.getElementById('screen');
  if (tots.round > 0) {
    tots.round = 0;
    document.getElementById('startButt').innerHTML = 'Start';
    
    screen.style.width  = '0%';
    lightTog();
  } else {
    tots.round = 1;
    tots.score = [0,0];
    updatePrompt();
    screen.style.width = '102%';
    document.getElementById('startButt').innerHTML = 'End';
    document.getElementById('t1s').innerHTML = tots.score[0];
    document.getElementById('t2s').innerHTML = tots.score[1];
    document.getElementById('clueField').innerHTML = '';
    // document.getElementById('psychic').innerHTML = ''; //
    document.getElementById('totL').innerHTML = '';
    document.getElementById('totR').innerHTML = '';
    document.getElementById('t1g').classList.toggle('turn');
  }
  console.log(tots)
}
const drawTot = () => {
  if (tots.round == 1 || tots.round == 6) {
    document.getElementById('modalBG').style.display = 'block';
    document.getElementById('modalTots').style.display = 'flex';
    for (var i = 1; i < 4; i++) { 
      if (tots.pot.length < 3) {
        tots.discard.forEach(el => tots.pot.push(el));
        tots.discard = [];
      };
      n = Math.floor(Math.random() * tots.pot.length)
      tots.draw.push(tots.pot.splice(n,1)[0])
      let left = document.getElementById('opt'+ (i-1) + 'L');
      let right = document.getElementById('opt'+ (i-1) + 'R');
      left.innerHTML = tots.draw[i-1][0].toUpperCase();
      right.innerHTML = tots.draw[i-1][1].toUpperCase();
    }
    console.log(tots)
  }
}
const pickTot = (id) => {
  let pick = id[3];
  if (tots.current.length > 0) {
    tots.discard.push(tots.current) };
  tots.current = tots.draw.splice(pick, 1)[0];
  tots.draw.splice(0).forEach(el => tots.pot.push(el));
  let left = document.getElementById('totL');
  let right = document.getElementById('totR');
  left.innerHTML = tots.current[0].toUpperCase();
  right.innerHTML = tots.current[1].toUpperCase();
  document.getElementById('modalBG').style.display = 'none'
  document.getElementById('modalTots').style.display = 'none';
  tots.round +=1; //increment to 2/7
  updatePrompt();
  console.log(tots);
}
const randomTot = () => {
  if (tots.current.length > 0) {
    tots.discard.push(tots.current) }
  if (tots.pot.length < 1) {
    tots.discard.forEach(el => tots.pot.push(el));
    tots.discard = [];
  };
  const toTot = tots.pot.splice((Math.floor(Math.random() * tots.pot.length)), 1)
  tots.current = toTot[0]
  let left = document.getElementById('totL');
  let right = document.getElementById('totR');
  left.innerHTML = tots.current[0].toUpperCase();
  right.innerHTML = tots.current[1].toUpperCase();
  console.log(tots);
}
const newClue = () => {
  if (tots.round == 2 || tots.round == 7) {
    document.getElementById('modalBG').style.display = 'block';
    document.getElementById('modalClue').style.display = 'flex'; 
  }
}
const enterClue = () => {
  let clue = document.getElementById('newClue').value.toUpperCase();
  let give = document.getElementById('clueField');
  give.innerHTML = clue;
  document.getElementById('modalBG').style.display = 'none';
  document.getElementById('modalClue').style.display = 'none';
  tots.round +=1; //increment to 3/8
  updatePrompt();
  document.getElementById('screen').style.width = '102%'
  console.log(tots)
}
const getTarget = () => {
  tots.target = Math.floor(Math.random() * 100);
  console.log(tots.target);
  let targetBox = document.getElementById('targetBox')
  targetBox.style.left = tots.target - 12 + "%"
}
const setGuess = () => {
  if (tots.round == 3 || tots.round == 8) {
    let score = 0;
    let guess = document.getElementById('tarSlider').value
    if (guess <= tots.target+2 && guess >= tots.target-2) {
      score = 4;
    } else if (guess <= tots.target+7 && guess >= tots.target-7) {
      score = 2;
    } else if (guess <= tots.target+12 && guess >= tots.target-12) {
      score = 1;
    } else {
      score = 0;
    }
    tots.team ? tots.score[0] += score : tots.score[1] += score;
    tots.team = !tots.team;
    tots.round += 1; //increment to 4/9
    lightTog();
    updatePrompt();
    console.log(tots)
  }
}
const overUnder = (id) => {
  if (tots.round == 4 || tots.round == 9) {
    let compare = tots.target - document.getElementById('tarSlider').value;
    let score = 0;
    if (id == 'over' && compare > 2) { //target is higher than guess
        score = 1;
    } else if (id == 'equal' && compare >= -2 && compare <= 2) {//target is equal guess
        score = 1;
    } else if (id == 'under' && compare < -2) {//target lower than guess
        score = 1;
    }
    tots.team ? tots.score[0] += score : tots.score[1] += score;
    updateScore();
    if (tots.round + 1 == 10) {
      tots.round = 1;
    } else {
      tots.round += 2;
    }
    updatePrompt(); 
    screenTog();
    lightTog();
    console.log(tots)
  }
}

console.log(tots);
console.log(players);
console.log(team);
updateGuess();
// element.classlist.toggle('classIWantToAdd')