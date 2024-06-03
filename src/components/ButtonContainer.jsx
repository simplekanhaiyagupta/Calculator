import style from './ButtonC.module.css';
const ButtonContainer = ({OnButtonClick}) =>{
    const buttong = ['c','7','8','9','+','4','5','6','-','1','2','3','*','/','.','='];
    return (
        <>
        <div className={style.buttons}>
        {buttong.map((buttong)=>{
            return <button key={buttong} className={style.button} onClick={ () =>  OnButtonClick(buttong)}>{buttong}
            </button>
        })}
         
        </div>
    </>
    )
};
export default ButtonContainer;