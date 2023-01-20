import pfp from '../Images/temppfp.png';

const Home = () => {
    return ( 
        <div className="home">
            
            <div className="bio">
                <div className='text'>
                    <div className="header">
                        <div className="hi">Hi, I'm <span style={{'color':'#f1356d', }}>Kevin</span></div>
                    </div>
                    <div className="bodytext">
                        A budding programmer and a first-year computer science student at the University of Waterloo
                    </div>
                    
                    
                    

                </div>
                <img src= {pfp} alt="pfp" className = "pfp"/>
            </div>
        </div>
        
     );
}
 
export default Home;