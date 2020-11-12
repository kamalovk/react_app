

export default class MainService {
  _apiMain = 'https://dog.ceo/api';
  async dogFunction(url) {
    const res = await fetch(`${this._apiMain}${url}`)
    return await res.json();
  }
  async allBredds() {
    const res = await this.dogFunction('/breeds/list/all')
    return await res.message;
  }
  async getDog(el) {
    const res = await this.dogFunction(`/breed/${el}/images/random`)
    return await res.message;
  }
}
