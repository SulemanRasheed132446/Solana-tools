import { Button } from "@/components/ui/button";
import categories from "../../../../data/categories"
import { DetailsComponent, DetailsListComponent, IContent, ImageHeader, TrialLink } from "../../../../data/types";
import Image from "next/image";
import { useMemo } from "react";
import ImageCarousel from "@/components/image-carousel";
import Contact from "@/components/contact";


interface Props {
    params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.projects.find(project => project.slug === slug));
    const project = category?.projects.find(project => project.slug === slug);
    return <div className='px-[10%]'>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center md:mb-0 mb-10">
            <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
            <h1 className="mt-4 md:mt-10 text-3xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> {project?.name}</h1>
            <div className="flex ml-4">
                <h1 className="mt-2 md:text-xl text-white  bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  mr-2 "> {category?.title}</h1>
                <h1 className="mt-2 md:text-xl text-white bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  "> {project?.paid ? "FREE" : "PAID"} </h1>
            </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10 mt-[5%] md:mt-[10%]">
            {project?.content.map((content, index) => <Component  {...content} key={index} />)}
        </div>
        <Contact/>
    </div>
}


const Component: React.FC<IContent> = (component) => {
    const populatedComponent = useMemo(() => {
        switch (component.type) {
            case "image-header":
                return <ImageComponent {...component} />
                break;
            case "details-component":
                return <DetailComponent {...component} />
            case "trial-link":
                return <TrialLinkComponent {...component} />
            case "details-list":
                return <DetailListComponent {...component} />
            case "image-carousel": 
                return <ImageCarousel {...component} />
            default:
                return null;
                break;
        }
    }, [component])

    return (<>
        {populatedComponent}
    </>)
}


const DetailComponent: React.FC<DetailsComponent> = (component) => {
    return <div className="shadow-xl shadow-[#8952e0]/10 text-white md:mt-[2%] bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-6 md:p-12 shadow-xl">
        <p className="font-bold text-xl md:text-3xl mb-2">{component.title}</p>
        {component.paragraphs.map((paragraph) => <p className="text-[#abadaf] text-xs md:text-md md:w-9/12 mt-3" key={paragraph}>{paragraph}</p>)}
    </div>
}

const TrialLinkComponent: React.FC<TrialLink> = (component) => {
    return (
        <div className=" shadow-xl shadow-[#8952e0]/10 mt-5 block flex flex-col md:flex-row relative text-white w-full flex items-center  justify-between bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-6 md:p-12 shadow-xl">
            <div>
                <p className="text-xl md:text-4xl font-bold">{component.title}</p>
            </div>
            <Button className="rounded-xl text-white mt-4 md:mt-0 shadow-xl md:ml-20 w-full md:w-fit bg-[#8952e0]" size="lg">{component.buttonText}</Button>
        </div>)
}


const ImageComponent: React.FC<ImageHeader> = ({ img_url }) => {
    return (<div className="shadow-xl shadow-[#8952e0]/10 flex flex-col items-center w-full">
        <Image
            alt="Mountains"
            layout="responsive"
            width={1920} // provide an appropriate width
            height={1080}

            src={img_url}
            sizes="100vw"

            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    </div>)
}

const DetailListComponent: React.FC<DetailsListComponent> = (component) => {
    return (
        <div className="shadow-xl text-white shadow-[#8952e0]/10 w-full mt-[2%] bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-6 md:p-12 shadow-xl">
            <p className="font-bold text-xl md:text-3xl mb-2">{component.title}</p>
            <ul className="list-disc ml-5 mt-4">
                {component.list.map((paragraph) => (
                    <li className="text-[#abadaf] text-xs text-md md:w-9/12 mt-1" key={paragraph}>{paragraph}</li>
                ))}
            </ul>

        </div>)
}
