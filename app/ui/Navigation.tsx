import Link from "next/link"
import { NavigationItem } from "../lib/models"



export default function Navigation({
    navigationItems,
    filter
}:{
    navigationItems :  NavigationItem[]
    filter: string
}) {
    const hover = "text-foodType-mainBg";
    const base = "text-black";


    return (
    <nav className="flex flex-col relative h-24 justify-center">
    <div className="flex absolute left-0">
      <p>2 ours dans la cuisine</p>
    </div>
      <ul className="absolute right-0 flex flex-row space-x-8 px-4">
        {
            navigationItems.map(item => (
                <li>
                    <Link key={item.url} href={`?menu=${item.url}`} className={`${filter == item.url ? hover : base }  font-semibold transition ease-in-out delay-150 hover:text-foodType-mainBg`}>{item.label}</Link>
                  </li>
        ))
        }
      </ul>
  </nav>
  )
}