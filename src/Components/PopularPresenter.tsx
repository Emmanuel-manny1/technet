import PresentersCard, {type Presenter} from "./PresentersCard"

const presenters: Presenter[] = [

    {
        id: 1,
        image:"/suitee.png",
        title: "Tolani Adisa",
    },

     {
        id: 2,
        image:"/suit.png",
        title: "Sodiq Shaw",
    },

     {
        id: 3,
        image:"/suitee.png",
        title: "Tolani Adisa",
    },

     {
        id: 4,
        image:"/suit.png",
        title: "Sodiq Shaw",
    },
]


const PopularPresenter = () => {
  return (
    <section className="w-full px-4 py-8 md:px-12 lg:px-36">
<h2 className="font-sans mb-6 font-bold text-3xl text-[#1F1F1F] md:text-[28px]">Popular Presenters</h2>
 <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-14">
   {presenters.map((presenter)=>(
      <PresentersCard key={presenter.id} {...presenter} />
   
   ))} 
 </div>
    </section>
  )
}

export default PopularPresenter