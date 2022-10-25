export const getJoeri = async () => {
  const { Person } = await import('./person');

  return new Person('Joeri');
};

export {
  Human,
} from './person';
