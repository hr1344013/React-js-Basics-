
function ProfilePicture(){
    const imageUrl = './src/assets/profile.avif';

     const handleClick = (e) => console.log("OUCH!");
     
     const handleClick2 = (e) => e.target.style.display = "none";

    return<img onClick={(e) => handleClick2(e)} src={imageUrl}></img>;
}

export default ProfilePicture