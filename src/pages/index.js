import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-gray-200">
      <div >

      <div className="flex items-center justify-center h-screen">
        <div className="rounded-lg grid grid-cols-2  ">
      
          <div className=" text-white  hidden md:grid">
            <Image src="/images/bg.png" 
            alt="" width={500} height={500} />
          </div>
      
      
          <div className="bg-white text-black  flex col-span-2 sm:col-span-1">
            
              <p class="text-2xl font-bold  text-white mb-4 ">Login</p >
            
            
          <div className="flex items-center justify-center">
            
          <form>
            <div className="mb-4 ">
              <p class="text-2xl font-bold  text-black-700">Login</p>
              <p class="text-md text-black-700">Donec tortor quam at duis tortor.</p><br/>
              <label className="block text-sm ">E-Mail</label>
                <input
                type="text"
                className="block w-96 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                placeholder="Placeholder Content"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm ">Password</label>
                <input
                type="password"
                className="block w-96 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                placeholder="Placeholder Content"
                />
              </div>

              <p class="text-right"><a>Forgot password?</a></p><br/>

              <Link href="dashboard">
              <button
                  type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Login
              </button>
              </Link>


              <br/><br/>
              
              <div class="flex items-center">
                <hr class="flex-grow border-t-1 border-gray-200"/>
                    <div class="px-4 text-gray-400">or</div>
                <hr class="flex-grow border-t-1 border-gray-200"/>
              </div>
              
              <br/>
              <button
                  type="submit"
                className="w-full px-4 py-2 text-black-300 bg-white-600 border-2 border-black-800 rounded hover:bg-gray-200 hover:border-black"
              >
                Register Now
              </button>

            </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
