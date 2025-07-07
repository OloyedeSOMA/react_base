const CustomInput=(props)=>{
    return(
        <>
            <input type={props.type} className={props.className} onClick={props.onClick}>
                {props.children}
            </input>
        </>
    );
}
export default CustomInput