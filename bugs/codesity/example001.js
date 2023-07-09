const blockCPUThread = (delayMs) => {
  console.log(new Date().getTime(), 'Blocking CPU thread');

  const startingMs = performance.now();
  while(performance.now() - startingMs < delayMs) {
    // Just iterate loop doing nothing...
  }

  console.log(new Date().getTime(), 'Stop blocking cpu thread');

  return "Dummy value";
}

blockCPUThread(2500);
console.log('hej jak sie masz?');

