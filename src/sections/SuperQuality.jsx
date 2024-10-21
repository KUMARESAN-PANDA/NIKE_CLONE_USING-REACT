import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
<section id="about-us"
className="flex justify-between
items-center max-lg:flex-col gap-10 w-full max-container">


  <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl  capitalize  lg:max-w-lg font-bold">
           We Provide You 
          
          <span className="text-coral-red inline-block mt-3">  Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrival, quality, and innovation for your quality life.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis error ducimus vitae.
           Porro earum et ut iure eius perferendis facere!
        </p>

        <p className="mt-6 lg:max-w-lg info-text
        ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Corrupti praesentium aspernatur earum, recusandae molestias impedit.
        </p>
        <div className="mt-11">        <Button label="View Details"  />
        </div>
        </div>


        <div className="flex-1 flex justify-center items-center">

          <img src={shoe8} alt="shoe8" 
          width={570}
          height={522}
          className="object-contain"/>
           
        </div>

</section>  )
}

export default SuperQuality