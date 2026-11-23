import { IterationCw } from "lucide-react"

const cards = [
   
    {
          id:"1",
        image: "/helmet.png",
        title: "Federal Government Unveils New Plan to Power 5 Million Homes With Solar Energy",
        readTime: "3 mins Read",
        postedAt: "2 hours ago",
    },

    {
        id: "2",
     image: "/bus.png",
     title: "New Night Bus Service Connects Lagos Mainland With Island Communities",
     readTime: "3 mins read",
     postedAt: "4 hours ago",
    }, 

    {
        id: "3",
     image: "/camera.png",
     title: "Young Nigerian Filmmakers Announce New Homegrown Streaming Platform",
     readTime: "3 mins Read",
     postedAt:  "1 day ago",
    },

    {
        id: "4",
       image: "/grass.png",
       title: "Oyo Farmers Adopt Smart Irrigation Technology Ahead of Dry Season",
       readTime:"3 mins Read",
       postedAt: "2 days ago",
    },
]

const NewsArticle = () => {
  return (
    <section className="w-full px-4 py-8 md:px-12 lg:px-36">  
      <h2 className="font-dm mb-6 text-2xl font-bold text-[#1F1F1F] md:text-[28px]"> 
        News Article For You
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-14" > 
       {cards.map((item) => (
         
         <div key={item.id}> 
         
           <div className="aspect-[4/3] overflow-hidden rounded-lg">
           <img 
            src={item.image}
        
          />

           </div>
         
         <h2 className="font-semibold font-serif text-base mt-4 text-[#1F1F1F]">{item.title}</h2>

           <div className="mt-3 flex items-center gap-3 text-[10px] text-gray-500">
              <span>{item.readTime}</span>
              <span className="h-3 w-px bg-gray-400" aria-hidden="true" />
              <span>{item.postedAt}</span>
            </div>
         </div>
       ))
       }

      </div>


    </section>
  )
}

export default NewsArticle