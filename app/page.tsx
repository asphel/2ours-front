import Image from 'next/image'
import PreviewCard from './ui/PreviewCard'

export default function Home() {
  return (
    <main className="py-6 px-2 max-w-screen-lg mx-auto">
    <section className='flex flex-wrap justify-center items-center gap-6'>
      {/* <Card recipePreview={preview}/> */}
      <PreviewCard/>
      <PreviewCard/>
      <PreviewCard/>
      <PreviewCard/>
      <PreviewCard/>
      <PreviewCard/>
    </section>
  </main>
  )
}
