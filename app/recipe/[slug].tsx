import Image from 'next/image'
import PreviewList from './ui/PreviewList'
import { fetchRecipePreview } from '../lib/api'
import { useRouter } from 'next/router'
import { bitter } from './ui/fonts'

export default async function Home() {
    const router = useRouter();
    console.log(router.query.id)


  return (
    <main className="py-6 px-2 max-w-screen-lg mx-auto">
        <p>{router.query.slug}</p>
    </main>)
}