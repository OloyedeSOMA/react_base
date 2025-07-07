import './CustomWrapper.css'
const CustomWrapper=(props)=>{
    return(
        <div id="wrapper">
            {props.children}
        </div>
    );

}
export default CustomWrapper