import React from 'react';
import Image from 'next/image';

const UnityComponent = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-cover bg-center relative' >
            <Image className='w-full h-full object-cover' src='/backgoundImage.avif' alt='' height={1000} width={1000} />
            <div className='absolute w-full h-full flex items-center justify-center'>
                <iframe
                    className='w-[100%] h-[100%]'
                    title="UnityContent"
                    src="/MajorProjectBuild/index.html"
                    // width="800"
                    // height="600"
                    frameBorder="0"
                ></iframe>
            </div>

        </div>
    );
};

export default UnityComponent;