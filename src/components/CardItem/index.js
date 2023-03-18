import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <li className={`cardItem-container ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
