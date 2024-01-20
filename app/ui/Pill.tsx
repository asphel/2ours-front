import { bitter, noto } from "./fonts";


export default function Pill({
    label, 
    textColor,
    bgColor
}:{
    label:string,
    textColor:string,
    bgColor:string
}) {

    return (
        <div className={`${bgColor} inline-block rounded-xl px-5 py-1`}>
            <p className={`${bitter.className} ${textColor} font-medium text-xs`}>{label}</p>
        </div>
    )
}