import { useEffect, useState } from "react"
import SliderCard from "./SliderCard"


function SliderMap() {
	
	let arrIMG=[
		
			{
				id:1,
				imageUrl: "1.jfif"
			},
			{
				id:2,
				imageUrl: "2.jfif"
			},
			{
				id:3,
				imageUrl: "3.jfif"
			},
			{
				id:4,
				imageUrl: "4.jfif"
			},
			{
				id:5,
				imageUrl: "5.jfif"
			},
			{
				id:6,
				imageUrl: "6.jfif"
			},
			{
				id:7,
				imageUrl: "7.jfif"
			},
			{
				id:8,
				imageUrl: "8.jfif"
			},
			{
				id:9,
				imageUrl: "9.jfif"
			},
			{
				id:10,
				imageUrl: "10.jfif"
			},
			{
				id:11,
				imageUrl: "11.jfif"
			},
			{
				id:12,
				imageUrl: "12.jfif"
			},
			{
				id:13,
				imageUrl: "13.jfif"
			},
			{
				id:14,
				imageUrl: "14.jfif"
			},
			{
				id:15,
				imageUrl: "15.jfif"
			}
			
	]
	
	 
	let [arr , setArr] = useState([])

	useEffect(()=>{
		fetch('https://62d01fd51cc14f8c0884e2b6.mockapi.io/pizza2')
		.then((answer)=>{return answer.json()})
		.then((Arrjson)=>{setArr(Arrjson)})
	},[])

  return (
	
	<div>
		{
		 arr.map((item)=>{
			return <SliderCard img={item.img} key={item.id} id={item.id}/>
		})
		}
	</div>
  )
}

export default SliderMap