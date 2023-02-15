import './App.css';
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		
		if(localStorage.isLoggedIn == "true"){
		  navigate("/passwords-table");
		} 
		navigate("/login");
	  },[]);

	return (
		<div className="App">
      	
		</div>
	);
}

export default App;
