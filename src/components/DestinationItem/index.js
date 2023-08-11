// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItemDetails} = props
  const {name, imgUrl} = destinationItemDetails

  return (
    <li className="item">
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
