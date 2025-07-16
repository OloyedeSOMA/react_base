import './CustomWrapper.css'
const CustomWrapper=(props)=>{
    return(
        <div id="wrapper" className = {props.className} >
            {props.children}
        </div>
    );

}
export default CustomWrapper