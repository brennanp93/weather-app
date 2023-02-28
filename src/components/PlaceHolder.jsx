import moment from 'moment';
export default function PlaceHolder() {
  return(
    <>
          <div className='weatherBox'>
            <div className='box1'>
              <h1>City Name</h1>
              <p>{moment().format('dddd')},&nbsp;
                {moment().format('MMMM Do YYYY, h:mm a')}</p>
            </div>
            <div className='box2'>
              <h4>Temp:<br />&nbsp;0ºF</h4>
            </div>
            <div className='box3'>
              <h4>Feels Like:<br />&nbsp;0ºF</h4>
            </div>
            <div className='box4'>
              <h4>Sunrise:<br />&nbsp;</h4>
            </div>
            <div className='box5'>
              <h4>Sunset:<br />&nbsp;</h4>
            </div>
            <div className='box6'>
              <h4>Sky:&nbsp;</h4>
            </div>
          </div>
    </>
  )
}