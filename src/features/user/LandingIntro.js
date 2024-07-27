import TemplatePointers from "./components/TemplatePointers";
import loginPageImage from '../../Assets/loginPage.jpg';


function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold mb-8'>Emopract Dashboard</h1>

                <img src={loginPageImage}></img>
              
              {/* Importing pointers component */}
              {/* <TemplatePointers /> */}
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro