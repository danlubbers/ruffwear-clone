import React from 'react';

// Image imports

class Home extends React.Component{
    render(){
        return(
        <div className='home-container'>
            <div className='featured-photo'>
                <div className='featured-text-container'>
                    <h1 className='mile-text'>BE IN THE MILE</h1>
                    <div className='button-container'>
                        <button className='adventureBtn'>Start Adventure</button>
                        <button className='shopCollectionBtn'>Shop Collection</button>

                    </div>

                </div>
            </div>
           
         </div>
        )
    }
}

export default Home