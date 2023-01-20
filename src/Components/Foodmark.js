import foodmarkPic from '../Images/foodmarkPic2.png';
const Foodmark = () => {
    return ( 
        <div className="foodmark">
            <img src= {foodmarkPic} alt="FoodMark" className = "foodmarkpic"/>
            <div className = "foodmarkdescription">
                <div className = 'foodmarkcontent'>
                    <a href="https://foodmark.fly.dev/"><h1>FoodMark</h1></a>
                    <p>Food mark is a web application that allows users to bookmark restaurants and add their ratings, comments, google maps information, and indicate if the restaurant 
                    is a favourite or visited. Users can navigate to the map page to display all their bookmarked restaurants as markers on a googlemap.
                    Built using React.js, Express.js, Node.js, and MongoDB.</p>
                    <a href="https://github.com/kevinasian122/foodMark-backend" className = "fmgithub">https://github.com/kevinasian122/foodMark-backend</a>
                </div>
            </div>
        </div>
     );
}
 
export default Foodmark;