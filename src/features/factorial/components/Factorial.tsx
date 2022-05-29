
import { useSelector } from "react-redux";
import { store } from "../../../app/store";
import FactorState  from "../state/FactorState";
import './Factorial.css'

const Factorial = () => {
    const State : FactorState  = useSelector((state : {factor : FactorState}) => state.factor);
    
    return (
        <>
        <h1>Factorial Calculator</h1>
        <h2 className="Result">{State.ResultValue}</h2>
        
        <input 
        type="number" 
        className="InputField" 
        value={State.InputValue}
        onChange={(e) => store.dispatch({
            type: "factor/inputValueChanged",
            payload: e.target.value
        })}>
        </input>
        
        </>
        );
    }
    
    export default Factorial;
    