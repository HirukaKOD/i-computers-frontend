import '../productCard.css'
export default function ProductCard(props){
    
    
    console.log(props)

    return(
        <div className='bg-blue-300 '>
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>

    )

}