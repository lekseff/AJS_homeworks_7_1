export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(hero) {
    if (this.team.has(hero)) {
      throw new Error(`${hero.type} ${hero.name} уже есть в команде`);
    }
    this.team.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.team.add(hero));
  }

  toArray() {
    return [...this.team];
  }
}
