'use client'
import { bitter, noto } from "./fonts";
//import { Preview } from "../lib/models";
import Image from "next/image";
import chefHat from "../../public/chef_hat.svg"
import whisk from "../../public/whisk.svg"




export default function PreviewCard() {

    return (
        <div className="flex flex-col shadow-md rounded-3xl">
            <div className="flex flex-none relative h-52 w-80">
                <Image
                    src="/cardImage.png"
                    alt="un exemple de cardImage"
                    fill
                    className="rounded-t-3xl"
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="flex flex-col w-80 p-5 rounded-b-3xl bg-white space-y-4">
                    <h2 className={`${bitter.className} font-medium text-lg line-clamp-2`}>Gâteau de patate douce réunionnais (Gato patate)</h2>
                    <p className={`${noto.className} font-light text-base line-clamp-3`}>Lorem ipsum dolor sit amet consectetur. Congue turpis iaculis amet non urna a aliquam.</p>
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-row space-x-2">
                            <Image
                            src={chefHat}
                            alt="Auteur"/>
                            <p>Pierre</p>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <Image
                            src={whisk}
                            alt="Auteur"/>
                            <p>45min</p>
                        </div>
                    </div>
                   
            </div>

        </div>
    )

}


