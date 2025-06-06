import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { BoxReveal } from "@/components/magicui/box-reveal"

  import personalpicture from "../../../assets/images/vishesh.jpg"
  
  export function PhotoSection() {
    return (

        <>


        <div className=" w-screen h-full flex items-center justify-evenly">



        <section className="w-1/2  flex justify-center">
        
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Vishesh
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Student of Engineering in Artificial Intellience & {" "}
          <span className="text-[#000000]">Machine Learning</span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#000000"} duration={0.5}>
        <div className="mt-6">
          <p>
            My Fields of Interest are:{" "}
            <span className="font-semibold text-[#000000]">MERN </span>,
            <span className="font-semibold text-[#000000]">DEVELOPMENT </span>,
            <span className="font-semibold text-[#000000]">GEN-AI </span>,
            and 
            <span className="font-semibold text-[#000000]"> PROGRAMMING</span>
          </p>
        </div>
      </BoxReveal>
    </div>

        </section>




        <section className="w-1/2 flex justify-center">
      <Avatar className="h-full w-lg">
        <AvatarImage src={personalpicture} alt="@shadcn" />
        <AvatarFallback>Vishesh</AvatarFallback>
      </Avatar>
      </section>



      </div>



      </>
    )
  }
  