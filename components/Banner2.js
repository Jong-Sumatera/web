import Image from "next/image";

export default function Banner2(props) {
    const {
        title,
        description,
        image
    } = props;
    return (
        <div className="bg-primary h-[500px] pt-[80px] flex items-center">
            <div className="max-w-screen-lg px-[16px] w-full flex m-auto items-center justify-between">
                <div className="max-w-[510px]">
                    <h1 className="text-[32px] text-white font-bold">{title}</h1>
                    <p className="text-[15px] text-white mt-[13px]">{description}</p>
                </div>
                <Image
                    src={image}
                    width={403}
                    height={291}
                    objectFit='fit'
                />
            </div>
        </div>
    )
}