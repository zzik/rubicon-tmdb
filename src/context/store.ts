import { makeAutoObservable} from "mobx"

class store {
  
  activeTab = "tv"

  queryString = ''
  
  queryStatus = false
  
    constructor () {
        makeAutoObservable(this)
    }

    setNewTab(choice: string) {
      this.activeTab = `${choice}`
    }
    
    activateQueryStatus() {
      this.queryStatus = true
    }

    changeQueryString(queryString: string) {
      this.queryString = queryString
    }
}

export default new store()