import Image from 'next/image'
import PreviewList from './ui/PreviewList'
import { fetchAllRecipesPreviews } from './lib/api'
import { bitter } from './ui/fonts'
import FoodType from './ui/FoodType'

export default async function Home() {
  const arrayRecipePreview = await fetchAllRecipesPreviews()
  return (
    <main className="py-6 px-2 max-w-screen-lg mx-auto">
      <header className="py-6 border-b-2 border-b-gray mb-4">
        <h1 className={`${bitter.className} font-medium text-2xl text-black`}>Dernières recettes</h1>
      </header>
    <section className='flex flex-wrap justify-center items-center gap-6'>
      <PreviewList items={arrayRecipePreview} ></PreviewList>
    </section>
  </main>
  )
}
