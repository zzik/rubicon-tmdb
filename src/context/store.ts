import { makeObservable, observable, action} from 'mobx'

class store {
  apiKey = '516bd90eaa5d6fc72dd79e7ba1bfaa28'
  activeTab = "tv"
  searchURL = ''
  baseLink = 'https://image.tmdb.org/t/p/w500'
  isQuery = false

  detailsID = 0

  constructor() {
    makeObservable(this, {
      // observables
      activeTab: observable,
      baseLink: observable,
      apiKey: observable,
      searchURL: observable,
      isQuery: observable,
      detailsID: observable,
      // actions
      setNewTab: action,
      changeQueryString: action,
      activateQuery: action,
      deactivateQuery: action,
      setID: action,
    })
  }

  setID(id) {
    this.detailsID = id
  }

  setNewTab(choice: string) {
    this.activeTab = `${choice}`
  }

  activateQuery() {this.isQuery = true}
  deactivateQuery() {this.isQuery = false
  this.searchURL = ''}

  changeQueryString(phrase: string) {
    if (phrase.length >= 3) {
      let param = "&query=" + phrase
      this.searchURL = `https://api.themoviedb.org/3/search/${this.activeTab}?api_key=${this.apiKey}&language=en-US&page=1${param}&include_adult=false`
    }
    if (phrase.length<3){
      this.searchURL = ''
    }
  }
}

export default new store()