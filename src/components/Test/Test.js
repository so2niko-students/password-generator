import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Test() {
    const navigate = useNavigate();
    useEffect(()=>{
        console.log('test')
        setTimeout(navigate("/login"), 1000);
    });
    return ('test');
}

export default Test;