
import Image from 'next/image';
import bgdashboard from '../../assets/dashboard-bg.jpg'

const Dashboardbannar = () => {
    return (
        <div className="w-full h-80">
           <Image src={bgdashboard} width={1200} height={200} alt='bg'></Image>
        </div>
    );
};

export default Dashboardbannar;