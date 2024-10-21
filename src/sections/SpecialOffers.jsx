import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} width={773} 
        height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl  capitalize  lg:max-w-lg font-bold">
           We Provide You 
          
          <span className="text-coral-red inline-block mt-3">  Special </span>
          Offer
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
        <div className="mt-11 flex flex-wrap gap-4">       
           <Button label="Shop Now"  />
           <Button label="Learn more"
           backgroundColor="bg-white"
           borderColor="border-slate-gray"
           textColor="text-slate-gray"></Button>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffers