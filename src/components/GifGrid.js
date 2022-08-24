
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
const {images, isLoading} = useFetchGifs(category)



  return (
    <>
    <h3>{category}</h3>
    {isLoading && <h1>cargando..</h1>}
    <div className='card-grid'>
        {images.map(image=>(
       <GifItem key={image.id} 
       // sirve para esparsir las propiedades que tiene image
       {...image}/>
        )
        )}
    </div>
    </>
  )
}
