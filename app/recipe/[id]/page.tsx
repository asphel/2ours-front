import Image from 'next/image'
import { fetchFullRecipeById } from '@/app/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS} from '@contentful/rich-text-types'
import { bitter, noto } from "@/app/ui/fonts";

const Title = ({ children }) => <h2 className={`${bitter.className} font-medium text-lg my-2 py-6 border-b-2 border-b-gray`}>{children}</h2>;
const ListeItem = ({ children }) => <li className={`${noto.className} font-light text-base list-disc`}>{children}</li>;

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <Title>{children}</Title>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListeItem>{children}</ListeItem>
  }
}

export default async function Recipe(
  {
    params,
  }:{
    params : {id:string}
  }) {
    const fullRecipe = await fetchFullRecipeById(params.id)
  return (
    <main className='py-6 px-2 max-w-screen-lg mx-auto'>
      <section className='p-8'>
      {documentToReactComponents(fullRecipe.fullDescription, options)}
      </section>
    </main>)
}