import { makeAutoObservable} from "mobx"

class store {
  
  activeTab = "shows"

  topMovies = []
  topShows = []
  
    constructor () {
        makeAutoObservable(this)
    }

    setNewTab(choice: string) {
      this.activeTab = `${choice}`
    }
}

export default new store()