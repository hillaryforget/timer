const soundAlarm = () => {
  console.log("ALARM");
  process.stdout.write('\u0007');

};

setTimeout(soundAlarm, 3000);

setTimeout(soundAlarm, 5000);

setTimeout(soundAlarm, 9000);

setTimeout(soundAlarm, 10000);

setTimeout(soundAlarm, 15000);