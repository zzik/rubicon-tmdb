import { makeObservable, observable, action} from 'mobx'

class store {
  apiKey = '516bd90eaa5d6fc72dd79e7ba1bfaa28'
  activeTab: string = "tv"
  queryString = ''
  searchURL = ''
  baseLink = 'https://image.tmdb.org/t/p/w300'

  // remove elements until the constructor along with their related objects

  constructor() {
    makeObservable(this, {
      // observables
      activeTab: observable,
      queryString: observable,
      baseLink: observable,
      apiKey: observable,
      searchURL: observable,
      // actions
      setNewTab: action,
      changeQueryString: action,
    })
  }



  setNewTab(choice: string) {
    this.activeTab = `${choice}`
  }

  changeQueryString(phrase: string) {
    if (phrase.length >= 3) {
      this.queryString = phrase
      let param = "&query=" + phrase
      this.searchURL = `https://api.themoviedb.org/3/search/${this.activeTab}?api_key=${this.apiKey}&language=en-US&page=1$${param}&include_adult=false`
    }
    if (phrase.length<3){
      this.searchURL = ''
    }
  }

}

export default new store()