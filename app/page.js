import Image from 'next/image'
import Header from './_comp/Header'
import Hero from './_comp/Hero'
export default function Home() {
  return (
    <main className='h-full w-full h-screen'>
      <div>   
    <Hero/> {/*home page sayfasında sadece animasyon ve context olacak*/}
   
   </div>
   </main>
    )
}