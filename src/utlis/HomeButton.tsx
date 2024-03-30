import { Link } from "react-router-dom";
import "./buttonstyle.css"

const HomeButton = () => {
 
  const styles = {
    container: {
      backgroundColor: "#191919",
      color: 'white',
      height: "100vh",
      width:"100%",
      display:"flex",
      justifyContent: 'center', 
    alignItems: 'center', 
    },
  };
  return (
    <div>
      <div className="container" style={styles.container}>
      <Link to="/admin/dashboard">


          <button className="button">Visit Dashboad</button>
      </Link>
      </div>
    </div>
  )
}

export default HomeButton
