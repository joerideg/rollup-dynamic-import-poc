import { getJoeri, Human } from 'rollup-lib';

setTimeout(() => {
  console.log('getting Joeri from vite app');
  getJoeri().then((joeri: Human) => joeri.sayHello());
}, 1000);
