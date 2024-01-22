import Image from 'next/image';
import React from 'react';
import styles from "./page.module.scss";
import Link from 'next/link';

async function getData(){
    const res = await fetch("https://picsum.photos/v2/list");
    return res.json();
}

const Photos = async () => {
    // on met le await car on veut attendre avant de faire un premier rendu
    const data = await getData();
    console.log(data);
    const photosList = data.slice(10, 20).map((image, index) => {
        return(
            <div className={styles.item} key={index}>
                <Link href={`/photos/${image.id}`}>
                    <Image src={image.download_url} alt="" layout='responsive' width={100} height={100}/>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h1 className={styles.title}>Nos photos souvenirs</h1>
            <div className={styles.items}>
                {photosList}
            </div>
        </div>
    )
}

export default Photos