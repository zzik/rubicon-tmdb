import store from "../context/store";

export default function Card(props:any) {

  return (
    <li className="card" >
      <a href={`/details/${props.id}`}>
      <img src={store.baseLink + props.poster} alt={props.description}/>
      <h2>{props.name}</h2>
      </a>
    </li>
  )
}
