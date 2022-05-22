import Validator from '../app';

test('Никнейм с ошибкой --> _dmmak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('_dmmak')).toThrow();
});

test('Никнейм с ошибкой --> -dmmak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('-dmmak')).toThrow();
});

test('Никнейм с ошибкой --> 3dmmak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('3dmmak')).toThrow();
});

test('Никнейм с ошибкой --> dmmak_', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dmmak_')).toThrow();
});

test('Никнейм с ошибкой --> dmmak-', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dmmak-')).toThrow();
});

test('Никнейм с ошибкой --> dmmak3', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dmmak3')).toThrow();
});

test('Никнейм с ошибкой --> dm3333mak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dm3333mak')).toThrow();
});

test('Никнейм --> dm333mak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dm333mak')).not.toThrow();
});

test('Никнейм --> dm-mak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dm-mak')).not.toThrow();
});

test('Никнейм --> dm_mak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dm_mak')).not.toThrow();
});

test('Никнейм --> dmmak', () => {
  const name = new Validator();
  expect(() => name.validateUsername('dmmak')).not.toThrow();
});
