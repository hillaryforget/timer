const soundAlarm = () => {
  console.log("ALARM");
};

setTimeout(() => {
  soundAlarm();
  process.stdout.write('\x07');
}, 3000);

setTimeout(soundAlarm, 5000);

setTimeout(soundAlarm, 9000);

setTimeout(soundAlarm, 10000);

setTimeout(soundAlarm, 15000);