
import Header from './components/header';
import Card from './components/card';
import Title from './components/title';
import Card2 from './components/card2';
import Card3 from './components/card3';
import Card4 from './components/card4';

function App(){
  return(
    <div>

      <div>
        <Header/>
      </div>

      <div>
        <Title/>
      </div>  

      <div className='grid grid-cols-4 gap-2 m-5'>
        <Card/>
        <Card2/>
        <Card3/>
        <Card4/>
      </div> 

    </div>   
  )
}

export default App;

