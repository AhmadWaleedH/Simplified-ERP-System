
import { Categories } from './Categories'
import ProductGraph from './ProductGraph'
import { ProductList } from './ProductList'
export default function ProductsManagement(){
  return (
    <>
    <div className='pt-6'>
    <div className='px-4'><Categories/></div>
    <div className='p-4 rounded-lg'><ProductGraph/></div>
    <div className='p-4'><ProductList/></div>
    </div>  
    </>
  )
}

