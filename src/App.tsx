import './App.css'
import Burguer from './components/Burguer'
import Logo from './assets/logo1.png'
import House2 from './assets/house2.jpg'
import House3 from './assets/house3.jpg'
import House5 from './assets/house5.jpg'
import House6 from './assets/house6.jpg'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <div className='bg-black h-16 flex text-white justify-between items-center px-4 md:justify-around'>
        <div className='flex'>
          <div>Strong Curiosity</div>
          <img className='h-8 w-14' src={Logo} alt="" />
        </div>
        <div className='md:flex gap-8 items-center hidden'>
          <div>About</div>
          <div>Contact</div>
          <button className='h-[40px] w-[100px] rounded-md bg-white text-black hover:bg-[#a4a4a4]'>PT / ENG</button>
        </div>
        <div className='md:hidden'>
          <Burguer />
        </div>
      </div>
      <div className='flex items-center md:text-left text-center justify-center md:justify-around h-[700px] flex-wrap'>
        <div className='flex lg:gap-44 sm:gap-8 '>
          <div className=''>
            <div className=''>
              <div className='text-[#4361ee] text-7xl'>Reviving</div>
              <div className='text-[#480ca8] text-7xl'>Algarve's</div>
              <div className='text-[#4361ee] text-7xl'>Heritage</div>
              <div className='text-[#480ca8] text-7xl'>Homes</div>
            </div>
            <div className='flex justify-center gap-10 pt-32'>
              <button className='h-[55px] w-[157px] border-2 rounded-2xl border-[#480ca8] text-[#480ca8] hover:bg-[#a4a4a4]'>Call us</button>
              <button className='h-[55px] w-[157px] border-2 rounded-2xl bg-black text-white hover:bg-[#a4a4a4]'>Learn More</button>
            </div>
          </div>
          <div className='md:grid grid-rows-3 grid-cols-3 gap-4 grow-1 hidden'>
            <div className='bg-black w-[300px] h-[143px] col-span-2 rounded-bl-full rounded-tr-full hidden md:block'></div>
            <img src={House2} className='bg-black w-[143px] h-[143px] rounded-tr-full rounded-tl-full rounded-bl-full hidden mdplus:block'></img>
            <img src={House3} className='bg-black w-[143px] h-[143px] rounded-tr-full rounded-br-full rounded-bl-full hidden mdplus:block'></img>
            <div className='bg-black w-[143px] h-[143px] hidden mdplus:block'></div>
            <img src={House5} className='bg-black w-[143px] h-[143px] rounded-bl-full hidden mdplus:block'></img>
            <div className='bg-black w-[143px] h-[143px] rounded-full hidden mdplus:block'></div>
            <img src={House5} className='bg-black w-[300px] h-[143px] col-span-2 rounded-br-full rounded-tl-full hidden md:block'></img>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-[350px] bg-[#4361ee] px-4 text-center lg:text-left'>
        <div className='flex lg:gap-28 gap-11 flex-col lg:flex-row'>
          <div>
            <div className='text-white text-7xl'>One-man Magic</div>
          </div>
          <div className='text-white whitespace-normal w-[480px]'>
            <div>Meet the powerhouse behind Portugal's most exciting refurbishments - a one-man
              show with unmatched dedication to preserving the charm of old houses while making them livable and functional.</div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-[1400px] md:h-[700px] bg-black'>
        <div className='flex md:gap-0 lg:gap-40 gap-11 flex-col md:flex-row text'>
          <div className='text-white flex flex-col flex-wrap gap-24 w-[400px] lg:w-[450px] pl-16 lg:px-12'>
            <div className='text-7xl md:text-left text-center'>Our Expertise</div>
            <div>
              <div>House Revamps</div>
              <div>Transforming timeworn homes into modern marvels with a touch of nostalgia.</div>
            </div>
            <div>
              <div>Maintenance</div>
              <div>Keeping your abode in tip-top shape with our regular maintenance services.</div>
            </div>
            <div>
              <div>Inspections</div>
              <div>Thorough assessments to ensure the safety and reliability of your property.</div>
            </div>
          </div>
          <div className='flex items-center justify-center h-full w-[450px] lg:pr-8'>
            <img src={House6} className='mt-20 bg-white w-[300px] h-[440px] lg:w-[470px] lg:h-[480px] col-span-2 rounded-bl-[160px] rounded-tr-[160px] rounded-tl-xl rounded-br-xl'></img>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-[700px] bg-[#4361ee]'>
        <div className='flex md:flex-row flex-col lg:gap-48  md:gap-8 gap-16 '>
          <div className='flex flex-col justify-center text-center gap-6 bg-[#2c4fec] h-[250px] w-[400px] md:w-[350px] md:h-[380px] lg:w-[450px] lg:h-[480px] col-span-2 rounded-bl-[160px] rounded-tr-[160px] rounded-tl-xl rounded-br-xl text-white'>
            <div>
              Strong Curiosity gave our ancestral home a new lease on life, striking the perfect balance between the old and new.
            </div>
            <div>
              CasaLisboa
            </div>
          </div>
          <div className='flex flex-col justify-center text-center gap-6 bg-[#2c4fec] h-[250px] w-[400px] md:w-[350px] md:h-[380px] lg:w-[470px] lg:h-[480px] col-span-2 rounded-bl-[160px] rounded-tr-[160px] rounded-tl-xl rounded-br-xl text-white'>
            <div>
              Their attention to detail and commitment to the project were truly exceptional. Our property has never looked better!
            </div>
            <div>
              PortoHeritage
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-center h-[350px] bg-white gap-10'>
        <div className='text-[#480ca8] text-7xl'>Get Started</div>
        <div className='w-[350px]'>Ready to breathe life back into your old property? Embrace the charm of yesteryear with our expert refurbishment services.</div>
        <div className='flex justify-center gap-10'>
          <button className='h-[55px] w-[157px] border-2 rounded-2xl bg-[#3a0ca3] text-white hover:bg-[#a4a4a4]'>Call us</button>
          <button className='h-[55px] w-[157px] border-2 rounded-2xl bg-[#4895ef] text-white hover:bg-[#a4a4a4]'>Learn More</button>
        </div>
      </div>
      <footer className="bg-[#4361ee] rounded-lg shadow-lg m-4 dark:bg-gray-800">
        <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Strong Curiosity™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Email</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Phone</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Location</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
