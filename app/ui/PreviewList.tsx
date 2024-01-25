import { bitter, noto } from "./fonts";
import PreviewCard from "./PreviewCard";
import { Preview } from "../lib/models";


export default function PreviewList({
    items
} : 
{
    items : Preview[]
}) {
    return (
        <>
        { 
            items.map(item => (<PreviewCard item={item}/>))
        }
        </>
    )
}
