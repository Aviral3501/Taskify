import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


export const Logo = () =>{
    return (
     
        <Link href="/">
            <div className="items-center gap-x-2 hidden md:flex ">
               <Image 
               className="hover:opacity-75 transition"
               src={"/logo.svg"}
                alt="logo"
                height={90}
                width={90} 
                />

            <p className={"text-2xl text-neutral-700 pb-1 font-black hover:opacity-75 transition"}>
                Taskify
            </p>
            </div>
           

        </Link>

    )
}

export default  Logo;