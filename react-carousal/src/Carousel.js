import React, { useEffect, useState } from "react";

const Carousel = () => {

    const [activeWallpaper,setActiveWallpaper] = useState(0);

    const handleNext = () => {
        setActiveWallpaper((activeWallpaper + 1) % data.length);
    }
    const handlePrev = () => {
        setActiveWallpaper(
            !activeWallpaper ? data.length - 1 : activeWallpaper - 1
            );

    }

    useEffect(()=>{
        setTimeout(()=>{
            handleNext()
        },5000)
    },[activeWallpaper])

    const data = [
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg",
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUL8mAT2BiUxu2KvOivbtJZ3N4GCRRjF2ehGaTzuObNyqSZlejKs_3yV8l7ValSolJgU&usqp=CAU",
        "https://e0.pxfuel.com/wallpapers/617/993/desktop-wallpaper-nature-sunset-simple-minimal-1600-x-900-simple.jpg"
    ]

    return (
        <div className="carousel flex justify-center items-center h-[100vh]">
            <button onClick={handlePrev} className="nextBtn p-4 m-10">Previous</button>
            <div className="imageHolder">
                {data.map((url, i) => <img key={url} className={"w-[700px] h-[500] object-cover " + (activeWallpaper === i ? "block" : "hidden")} src={url} alt='wallpaper'/>)}
            </div>
            <button onClick={handleNext} className="nextBtn p-4 m-10">Next</button>
        </div>
    )
}

export default Carousel;