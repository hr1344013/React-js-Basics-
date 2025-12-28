import profilePic from './assets/profile.avif'


function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Harsh</h2>
            <p className="card-text">I make websites and play videogames.</p>
        </div>
    );
}

export default Card