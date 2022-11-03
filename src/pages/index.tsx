import Image from "next/image"
import previewAppImg from '../assets/preview-app.png'
import usersAvatarImg from '../assets/users-avatar-example.png'
import logoNlwCopa from '../assets/logo-nlw.svg'
import iconCheck from '../assets/icon-check.svg'

import { api } from "../lib/axios"





interface HomeProps{
  poolsCount:number,
  guessesCount: number,
}




export default function Home( props: HomeProps) {


  


  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoNlwCopa} alt='NLW COPA '/>

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div 
          className="mt-10 flex items-center gap-2 "
        >
          <Image 
            src={usersAvatarImg} 
            quality={100} alt=''/>

          <strong
            className="text-xl text-gray-100 ">

            <span 
              className="text-ignite-500 pr-2">
              +12.592 
            </span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2 ">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm"

            type='text' 
            placeholder='Qual nome do seu bolão?'>

           </input>

          <button 
            className="bg-yellow-400 px-6 py-4 rounded font-bold text-sm text-gray-500" 
            type="submit">
            CRIAR MEU BOLÃO
            </button>
        </form>
        <div className="mt-4 text-sm text-gray-300 leading-relaxed"><p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p></div>

        <div className="mt-10 pt-10 border-t border-gray-300 flex items-stretch justify-between">


          <div className="flex  items-center gap-6">

            <Image src={iconCheck} alt='check'/>

            <div className=" flex flex-col">

              <span>+{props.poolsCount}</span>
              <span>Bolões criados</span>
            </div>
            
          </div>

          <div className="w-px h-14 bg-gray-600"></div>

          <div className="flex  items-center gap-6">

          <Image src={iconCheck} alt='check'/>

          <div className="flex flex-col">
              <span>+{props.guessesCount}  </span>
              <span>Palpites Enviados</span>
            </div>

          </div>
        </div>

       
      </main>
      <div>
          <Image src={previewAppImg} quality={100} alt='imagem de exemplo aplicação mobile'/>
      </div>


    </div>
  )
}

export const getDataCount = async () =>{

  // verificar pq nao ta pegando os dados do banco

  const [poolsCount, guessesCount] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count')
  ])
  return{
    props:{
      countPool: poolsCount.data.count,
      countGuess: guessesCount.data.count,
    }
  }

}


