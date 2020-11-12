
export default class ApiService {
  /*_apiMain = 'https://swapi.dev/api/'
  async mainFunction(url) {
    const res = await fetch(`${this._apiMain}${url}`);
    return await res.json();
  }
  async peopleFunction() {
    const res = await this.mainFunction(`people`);
    return res.results;
  }
  personFunction(id) {
    return this.mainFunction(`people/${id}`);
  }
  async filmAllFuntion() {
    const res = await this.mainFunction(`films`);
    return await res.json();
  }
  filmFunction(id) {
    return this.mainFunction(`films/${id}`);
  } */
  _randomJokeUrl = 'https://api.chucknorris.io/jokes/';
  async jokeFunction(url){
    const res = await fetch(`${this._randomJokeUrl}${url}`)
    return await res.json();
  }
  async randomJokeFunction() {
    const res = await this.jokeFunction(`random`);
    return await res.value;
  }
  async categoryJokefunction() {
    const res = await this.jokeFunction('categories');
    return await res;
  }
  
  async selectCategoryJokeFunctio() {
    const res = await this.jokeFunction('random?')
  }
}





