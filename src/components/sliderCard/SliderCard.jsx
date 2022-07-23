 
import ObjectModuleKeys from './slideCard.module.css' 

function SliderCard(props) {
  return (
	<div className={ ObjectModuleKeys.wrapper}>
		<img id={props.id}  src={props.img} alt="" />
	</div>
  )
}

export default SliderCard