import Image from 'next/image'
import PreviewList from './ui/PreviewList'
import { fetchAllRecipesPreviews } from './lib/api'
import { bitter, noto } from './ui/fonts'
import FoodType from './ui/FoodType'
import Link from 'next/link'

export default async function Home() {
  const arrayRecipePreview = await fetchAllRecipesPreviews()
  return (
    <main className="px-2 max-w-screen-lg mx-auto">
      <header className="relative flex h-24 items-center">
        <div className="absolute left-0">
          <p>2 ours dans la cuisine</p>
        </div>
        <nav className="absolute right-0">
          <ul className="flex flex-row space-x-8 px-4">
            <li>
              <Link href="#" className="font-semibold transition ease-in-out delay-150 hover:text-foodType-mainBg">Accueil</Link>
            </li>
            <li>
              <Link href="#">Entrées</Link>
            </li>
            <li>
              <Link href="#">Plats</Link>
            </li>
            <li>
              <Link href="#">Desserts</Link>
            </li>
            <li>
              <Link href="#">Cocktails</Link>
            </li>
          </ul>
        </nav>
      </header>
    <section className='flex flex-wrap justify-center items-center gap-6'>
      <PreviewList items={arrayRecipePreview} ></PreviewList>
    </section>
  </main>
  )
}
