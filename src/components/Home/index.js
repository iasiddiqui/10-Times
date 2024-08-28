import { Component} from 'react'
import Header from '../Header'
import CategoryItem from '../Category'
import "./index.css"

const category=[
    {id :1, name : 'Education & Category', events : 12230},
    {id :2, name : 'Medical & Pharma', events : 2982},
    {id :3, name : 'IT & Technology', events : 74782},
    {id :4, name : 'Banking and Finance', events : 12230},
    {id :5, name : 'Bussiness Service', events : 28218},
    {id :6, name : 'Industrial Engineering', events : 12230},
    {id :7, name : 'Entartainment & Media', events : 8283},
    {id :8, name : 'Building & construction', events : 12230},
    {id :9, name : 'Science & Research', events : 7483},
    {id :10, name : 'Wellness, Health & Wealth', events :8578},
    {id :11, name : 'Power & Energy', events : 12230},
    {id :12, name : 'Arts & Crafts ', events : 9843},
    {id :13, name : 'Agriculture & Forestry', events : 8353},
    {id :14, name : 'Enviornment & waste', events : 7645},
    {id :15, name : 'Logistrics & Transportation', events : 12230},
    {id :16, name : 'Electric & Electronics', events : 12230},
    {id :17, name : 'Auto & Automatives', events : 12230},
    {id :18, name : 'Fashion & Beauty', events : 12230},
    {id :19, name : 'Home & Office', events : 12230},
    {id :20, name : 'Travel & Tourism', events : 12230},
    {id :21, name : 'Apparel & Clothing', events : 1238},
    {id :22, name : 'Security & Defence', events : 9463},
    {id :23, name : 'Telecommunication', events : 1284},
    {id :24, name : 'Animal & Pets', events : 6743},
    {id :25, name : 'Baby, Kids & Maternity', events : 4439},
    {id :26, name : 'Hospitality', events : 9863},
    {id :27, name : 'Packing & Packaging', events : 9834},
    {id :28, name : 'Miscellaneous', events : 2342},
    {id :29, name : 'Education & Category', events : 7864}
]



class Home extends Component{
    render(){
    return(
        <div className="home-cnt">
            <Header/>
            <div className='content-cnt'>
                <h1 className='home-heading'>Find Your Next <span className="span-head">Opportunity</span></h1>
                <ul className='list-content-cnt'>
                    <li className='list-item-name'>All Events</li>
                    <li className='list-item-name'>Happening Today</li>
                    <li className='list-item-name'>Virtual</li>
                    <li className='list-item-name'>Popular</li>
                    <li className='list-item-name'>Network</li>
                </ul>
            </div>
            <div className='category-cnt'>
                  <h1 className='category-heading'>Browse By Category</h1>
                  <ul className='category-list'>
                    {category.map(each=>(
                       <CategoryItem key={each.id} details={each}/>
                    ))}
                  </ul>
                </div>
        </div>
    )
  }

}
export default Home