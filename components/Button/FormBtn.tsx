export default function FormBtn({ disabledStatus, classname, clickHandler, text }){
  return (
    <button className={classname} disabled={disabledStatus} onClick={clickHandler}>{text}</button>
  )
}