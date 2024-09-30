const renderComponent = ({onInputChange, className, canMultiple = false, disabledComp = false}) => {
    function setImage(event){
        if(canMultiple){
            onInputChange([...event.target.files])
        }else{
            onInputChange(event.target.files[0])
        }
    }


    return(
        <div className={"" + className}>
            <input type="file" onChange={setImage} disabled={disabledComp} multiple={canMultiple}/>
        </div>
    )
}

export default renderComponent;
