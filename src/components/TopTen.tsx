import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import TopTenShows from './TopTenShows'
import TopTenMovies from './TopTenMovies'
import { QueryClient, QueryClientProvider } from 'react-query'




const TopTen = observer(() => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className={store.activeTab}>
        {/* {movies.isFetched && <li>{movies.data.results[0].title}</li>} */}
        {store.activeTab === 'shows' && <TopTenShows />}
        {store.activeTab === 'movies' && <TopTenMovies />}
      </div>
    </QueryClientProvider>
  )
})
export default TopTen