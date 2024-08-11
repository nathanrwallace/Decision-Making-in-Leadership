function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rjmmQ3XaT3":
        Script1();
        break;
      case "6PAvIzOoGbF":
        Script2();
        break;
      case "6pnOf1uzrYL":
        Script3();
        break;
      case "5ro7wgbkVLo":
        Script4();
        break;
      case "6b1iwAOXoKy":
        Script5();
        break;
      case "6XcPFP41FOB":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('699VhAmOoCQ');
const duration = 1500;
const easing = 'ease-out';
const id = '5kDiC8KVWYC';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('699VhAmOoCQ');
const duration = 1500;
const easing = 'ease-out';
const id = '5kDiC8KVWYC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6SnhCazM7gO');
const duration = 1500;
const easing = 'ease-out';
const id = '5nXpRjKdPIZ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6SnhCazM7gO');
const duration = 1500;
const easing = 'ease-out';
const id = '5nXpRjKdPIZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('64lXoVLMIGx');
const duration = 1500;
const easing = 'ease-out';
const id = '6DkHVdy2nxl';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('64lXoVLMIGx');
const duration = 1500;
const easing = 'ease-out';
const id = '6DkHVdy2nxl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
