import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Test() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/login");
    });
    return ('');
}

export default Test;