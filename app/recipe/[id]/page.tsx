import Image from 'next/image'
import PreviewList from './ui/PreviewList'
import { bitter } from './ui/fonts'
import { fetchFullRecipeById } from '@/app/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function Recipe(
  {
    params,
  }:{
    params : {id:string}
  }) {
    const fullRecipe = await fetchFullRecipeById(params.id)
    // const test = documentToReactComponents(fullRecipe.fullDescription as Document)
  return (
    <main className="py-6 px-2 max-w-screen-lg mx-auto">
        {documentToReactComponents(fullRecipe.fullDescription)}
    </main>)
}