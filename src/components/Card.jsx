const Card = (props) => {

    if(props.type == 'forecast'){
      let hour = props.time.split(' ');
      return(
        <div className="flex flex-col m-2 bg-gray-100/20 shadow-sm rounded-lg shadow-black items-center justify-evenly">
          <p className='font-thin text-center text-sm'>{hour[1]}</p>
          <img src={props.condition.icon} alt="" className=" h-1/2" />
            <p className="text-center font-thin text-xs w-[80px]">{`${props.temp}ºC`}</p>
          </div>
    )
  }
    else{
      return(
        <div className="flex flex-col m-2 bg-gray-100/20 shadow-sm rounded-lg shadow-black items-center justify-evenly">
          <p className='font-thin text-center text-sm'>Now</p>
          <img src={props.data.condition.icon} alt="" className=" h-1/2" />
            <p className="text-center font-thin text-xs w-[80px]">{`${props.data.temp_c}ºC`}</p>
          </div>
    )
    }
}
export {Card}