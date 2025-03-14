import './App.css'
import MainPanel from './components/MainPanel'

function App()
{
  return (
    <>
      <div className="bg-[#C5E4E7] h-[100vh] max-[590px]:h-[975px] max-[1010px]:h-[1125px] font-[SpaceMono] flex flex-col justify-center">

        <div className="flex justify-center pb-[90px] max-[590px]:pb-[40px]">
          <img src="./images/logo.svg" alt="splitter logo" />
        </div>

        <MainPanel />

      </div>
    </>
  )
}

export default App