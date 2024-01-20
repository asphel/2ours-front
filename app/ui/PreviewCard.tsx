import { bitter, noto } from "./fonts";
//import { Preview } from "../lib/models";
import Image from "next/image";
import Link from "next/link";
import chefHat from "../../public/chef_hat.svg"
import whisk from "../../public/whisk.svg"
import { Preview } from "../lib/models";
import FoodType from "./FoodType";
import { it } from "node:test";



export default function PreviewCard({
    item
} : 
{
    item : Preview
}) {

    return (
        <Link href={`/recipe/${item.id}`}>
        <div className="flex flex-col shadow-md rounded-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 duration-150">
            <div className="flex flex-none relative h-52 w-80">
            
                <Image
                    src={`${item?.mainPicture || '/cardImage.png'}`} 
                    alt="un exemple de cardImage"
                    fill
                    className="rounded-t-3xl"
                    style={{
                        objectFit: 'cover'
                    }}
                />

                <div className=" absolute right-3 top-2">
                    <FoodType type={item.type}></FoodType>
                </div>
            </div>
            <div className="relative flex flex-col w-80 p-5 rounded-b-3xl bg-white space-y-4 h-56">
                    <h2 className={`${bitter.className} font-medium text-lg line-clamp-2`}>{item?.name || "No name"}</h2>
                    <p className={`${noto.className} font-light text-base line-clamp-3`}>{item?.shortDescription || "No description"}</p>
                    <div className="flex absolute bottom-4 flex-row space-x-4 px-1">
                        <div className="flex flex-row space-x-2">
                            <Image
                            src={chefHat}
                            alt="Auteur"/>
                            <p>Pierre</p>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <Image
                            src={whisk}
                            alt="Durée"/>
                            <p>45min</p>
                        </div>
                    </div>
                   
            </div>

        </div>
        </Link>
    )

}


