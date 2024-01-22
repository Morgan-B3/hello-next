import Image from 'next/image';
import React from 'react';
import styles from "./page.module.scss"

async function getData(id) {
    const res = await fetch(`https://picsum.photos/id/${id}/info`);
    return res.json();
}

const Photo = async ({ params }) => {
    const data = await getData(params.id);

    return (
        <div className={styles.title}>
            <h1 className={styles.child}>{data.author}</h1>
            <div>
                <Image src={data.download_url} alt='' width={data.width} height={data.height} layout='responsive'/>
            </div>
        </div>

    )
}

export default Photo