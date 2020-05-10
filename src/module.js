console.log('module');

async function start() {
  return await Promise.resolve('asunc');
}

start().then(console.log);
