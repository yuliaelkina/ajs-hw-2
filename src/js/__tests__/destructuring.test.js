import destructuringSpecials from '../destructuring';

test('извлечение свойств', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  expect(destructuringSpecials(character)).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  }, {
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'не доступно',
    icon: 'http://...',
  }]);
});
