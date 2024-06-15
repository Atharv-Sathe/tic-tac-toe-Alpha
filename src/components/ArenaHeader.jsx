import swords from '../assets/swords.png';
import fireflame from '../assets/fire-flame.gif';

function ArenaHeader() {
    return (
        <div id="arena-header" className="flex justify-center items-center  gap-2  p-2">
            <h3 id="arena-heading" className=" font-bold  text-3xl  text-orange-500  ">Arena</h3>
            <img src={swords} alt="sword-icon" className='h-7 w-7' />
            <img src={fireflame} alt="fire-icon" className='h-7 w-7' />
        </div>
    );
}


export default ArenaHeader;