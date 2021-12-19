import { makeAutoObservable} from "mobx"

class store {
  
  activeTab = "tv"
  queryString = ''
  data = []
  apiKey = '516bd90eaa5d6fc72dd79e7ba1bfaa28'

    constructor () {
        makeAutoObservable(this)
    }

    setNewTab(choice: string) {
      this.activeTab = `${choice}`
    }

    changeQueryString(queryString: string) {
      this.queryString = queryString
    }

    pushNewData(data: any) {
      this.data.push = data
    }
}

export default new store()