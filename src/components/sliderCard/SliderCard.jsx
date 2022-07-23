
import ObjectModuleKeys from './slideCard.module.css' 

function SliderCard(props) {
  return (
	<div className={ObjectModuleKeys.wrapper}>
		<img id={props.id}  src={props.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5JOSp_XJyjTX4t5ze6aLJYZRRp08pLECXjJvkgod1g&s'} alt="" />
	</div>
  )
}

export default SliderCard