import style from './Display.module.css';
const Dis = ({displayVal}) => {
    return (
        <input className={style.display} type="text" value={displayVal}  readOnly/>
    );

}
export default Dis;