import './index.css'

const CategoryItem=(props)=>{
    const {details}=props
    const {name, events}= details
    return(
      <li className='cate-item'>
         <p className='category'>{name}</p>
         <p className='event'>{`${events} Events`}</p> 
      </li>
    ) 
}
export default CategoryItem