

const Card = () => {
    return(
        <div className="flex flex-col w-1/4 h-3/4 px-2 bg-gray-100/20 shadow-sm rounded-lg shadow-black items-center justify-evenly">
          <p className='font-thin text-center mt-2'></p>
          <img alt="" className="p-2" />
            <p className="text-center font-thin text-xs">10ºC - 18ºC</p>
          </div>
    )
}
export {Card}