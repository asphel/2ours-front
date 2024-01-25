import Image from 'next/image'
import PreviewList from './ui/PreviewList'
import { fetchAllRecipesPreviews, fetchRecipesPreviewsByType } from './lib/api'
import Navigation from './ui/Navigation'
import { NavigationItem } from './lib/models';
import { Preview } from './lib/models';

const navigationItems: NavigationItem[] = [
  {
      label : "Accueil",
      url : "home"
  },
  {
      label : "Entrées" ,
      url : "first"
  },
  {
      label : "Plats",
      url : "main"
  },
  {
      label : "Desserts",
      url : "dessert"
  },
  {
      label : "Cocktails",
      url : "#cocktail"
  }];

export default async function Home({searchParams} : any) {
  let arrayRecipePreview = await fetchAllRecipesPreviews()

  if(searchParams.menu != "home" ) {
    arrayRecipePreview = await fetchRecipesPreviewsByType(searchParams.menu)
  }
  
  return (
    <main className="px-2 max-w-screen-lg mx-auto">
      <header className="">
        <Navigation navigationItems={navigationItems} filter={searchParams.menu}></Navigation>
      </header>
    <section className='flex flex-wrap justify-center items-center gap-6'>
      <PreviewList items={arrayRecipePreview} ></PreviewList>
    </section>
  </main>
  )
}
