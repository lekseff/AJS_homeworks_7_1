import Team from '../app';

describe('Checking the Team class', () => {
  let myTeam;
  const zombie = {
    name: 'Shon',
    type: 'Zombie',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  };
  const undead = {
    name: 'Fred',
    type: 'Undead',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  };
  const bowman = {
    name: 'Legolas',
    type: 'Bowman',
    level: 2,
    health: 100,
    attack: 25,
    defence: 25,
  };

  beforeEach(() => {
    myTeam = new Team();
  });

  test('Возможность добавить одного героя', () => {
    myTeam.add(zombie);
    const expected = new Set().add(zombie);
    expect(myTeam.team).toEqual(expected);
  });

  test('Дабавляем второго героя', () => {
    myTeam.add(zombie);
    myTeam.add(undead);
    const expected = new Set([zombie, undead]);
    expect(myTeam.team).toEqual(expected);
  });

  test('Добавляем существующего героя, ошибка', () => {
    function addHeroes() {
      myTeam.add(zombie);
      myTeam.add(bowman);
      myTeam.add(zombie);
    }
    expect(addHeroes).toThrowError(new Error('Zombie Shon уже есть в команде'));
  });

  test('Добавляем несколько разных героев', () => {
    myTeam.addAll(zombie, bowman, undead);
    const expected = new Set([zombie, bowman, undead]);
    expect(myTeam.team).toEqual(expected);
  });

  test('Добавляем несколько одинаковых героев', () => {
    myTeam.addAll(zombie, bowman, bowman, zombie);
    const expected = new Set([zombie, bowman]);
    expect(myTeam.team).toEqual(expected);
  });

  test('Массив героев', () => {
    myTeam.add(zombie);
    myTeam.add(bowman);
    myTeam.add(undead);
    const expected = [zombie, bowman, undead];
    expect(myTeam.toArray()).toEqual(expected);
  });
});
