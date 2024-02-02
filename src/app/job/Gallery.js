import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className='my-[100px] flex justify-between items-center'>
                <div>
                    <Image
                        src="https://i.ibb.co/wNzPjct/25-removebg-preview.png"
                        alt="Company Logo"
                        width={350}
                        height={350}

                    />
                </div>
                <div className='text-right'>
                    <p className='text-[38px] font-bold'>Unleash our creativity with high-quality assets</p>
                    <p className='text-[20px] mt-[20px]'>See the collection and explore with us</p>
                    <div style={{ float: 'right' }}>
                        <Image
                            src="https://i.ibb.co/LgFphFr/20-removebg-preview.png"
                            alt="Company Logo"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center gap-[20px]'>
                <div>
                    <Image
                        src="https://i.ibb.co/8zDrzYm/pexels-andrea-piacquadio-3756681.jpg"
                        alt="Company Logo"
                        width={350}
                        height={350}

                    />
                </div>

                <div>
                    <div >
                        <div className='mb-[20px]'>
                            <Image
                                src="https://i.ibb.co/wSZRb4w/pexels-karolina-grabowska-8554090.jpg"
                                alt="Company Logo"
                                width={330}
                                height={330}

                            />
                        </div>
                        <div>
                            <Image
                                src="https://i.ibb.co/BKBRyXk/pexels-karolina-grabowska-4476376.jpg"
                                alt="Company Logo"
                                width={330}
                                height={330}

                            />
                        </div>
                    </div>
                </div>

                <div>
                    <Image
                        src="https://i.ibb.co/8Y0Z5h7/pexels-kindel-media-7688460.jpg"
                        alt="Company Logo"
                        width={350}
                        height={350}

                    />
                </div>
                <div>
                    <div className='mb-[20px]'>
                        <Image
                            src="https://i.ibb.co/Bj1HgyH/pexels-fauxels-3184465.jpg"
                            alt="Company Logo"
                            width={330}
                            height={330}

                        />
                    </div>
                    <div>
                        <Image
                            src="https://i.ibb.co/PcSnH1q/pexels-andrea-piacquadio-927451.jpg"
                            alt="Company Logo"
                            width={330}
                            height={330}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;