export type Presenter = {
    id: number
    image: string
    title:string
}

const PresentersCard = ( {image, title}: Presenter) => {
  return (
    <section>
      <div className= "flex items-end justify-center bg-[#FEC021] aspect-[6/5] overflow-hidden rounded-lg ">
         <img src={image} className=" h-[95%] w-auto object-contain object-bottom" />
      </div>
      <h3 className="mt-3 font-serif text-sm font-semibold text-[#1F1F1F]">{title}</h3>
    </section>
  )
}

export default PresentersCard