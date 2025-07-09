
interface ButtonProps {

  text: string
  onClick: ()=> void
}

export function Button (props : ButtonProps){
  return <button className="bg-slate-200 cursor-pointer hover:bg-amber-200 text-3xl rounded-xl py-2 px-6" onClick={props.onClick} >
    {props.text}
  </button>
}
