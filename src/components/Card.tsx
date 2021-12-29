import store from "../context/store";



export default function Card(props: any) {
  return (
    <li className="card" onClick={() => {store.setID(props.id)}}>
      <a href={`/${store.activeTab}/${props.id}?api_key=${store.apiKey}&language=en-US`}>
        <img src={store.baseLink + '/' + props.poster} alt={props.description} width="300" />
        <h2>{props.name}</h2>
      </a>
    </li>
  )
}
