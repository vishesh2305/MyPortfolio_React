import { MorphingText } from "@/components/magicui/morphing-text"

import { IconCloud } from "@/components/magicui/icon-cloud";

function Herosection() {


    const texts = [
        "Welcome to My Portfolio",
        "Vishesh",
        "Engineering Student",
        "Passionate Developer",

    ];


    const slugs = [
        "typescript",
        "javascript",
        "react",
        "flutter",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "firebase",
        "vercel",
        "testinglibrary",
        "docker",
        "git",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "figma",
    ];


    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );



    return (
        <div className="h-screen flex items-center justify-evenly ">




            <section className=" w-1/3 h-3/5 flex justify-center ">
                <MorphingText texts={texts} />
            </section>
            <section className="w-1/3 h-3/5 ">


                <div className="relative flex size-full items-center justify-center overflow-hidden ">
                    <IconCloud images={images} />
                </div>





            </section>



        </div>
    )
}

export default Herosection
