import './App.css';

const myProfile = {
  name: "Puneet Kaur",
  age:18,
  grade: 12,
  school: "Mountain Ridge High School"
}

function Intro(){
  return (
    <div className = "App">
      <h1> Name: {myProfile.name}</h1>
      <h1> Age: {myProfile.age}</h1>
      <h1> Grade: {myProfile.grade}</h1>
      <h1> School: {myProfile.school}</h1>
    </div>
  );
}

function PageComponent(){
  return(
    <div className = 'Page'>
      <Intro/>
    </div>
  );
}
export default PageComponent;
