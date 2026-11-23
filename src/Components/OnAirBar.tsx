import { Play } from "lucide-react"

const OnAirBar = () => {
  return (
    <div className="w-full bg-[#1F1F1F] text-white">
<div className="flex items-center w-full h-[50px] justify-between px-4 md:px-12 lg:px-36">
    <div className="flex items-center gap-4">
       <button
           type="button"
  aria-label="Play live stream"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 transition-colors hover:bg-yellow-300 cursor-pointer"
>
  <Play className="ml-0.5 h-3.5 w-3.5 fill-[#1F1F1F] text-[#1F1F1F]" />
          </button>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className=" text-xs font-medium text-red-500"> On Air Now</span>
          </div>

          <p className="text-xs"> The industrial revolutionary scene / Samuel Ajayi / 7:00am – 9:30am</p>

    </div>

<div className="flex items-center gap-8">
<div className="">
    <p className="text-[10px] font-medium">
              The Big shot With Deji
            </p>
            <p className="text-[8px] text-gray-400">
              Deji Ajekulo | 10:00am – 3:00pm
            </p>
</div>

<span className="text-sm font-semibold text-yellow-400">Up Next</span>
</div>


</div>
    </div>
  )
}

export default OnAirBar