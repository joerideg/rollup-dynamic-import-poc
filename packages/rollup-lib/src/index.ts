const { Person } = await import('./person');

const joeri = new Person('Joeri');

joeri.sayHello();
console.log('done executing');

export {
  joeri,
};
export {
  Human,
} from './person';
