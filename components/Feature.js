import Image from "next/image";

export function Feature(props) {
    console.log(props)
    const {
        imageSrc,
        reverse,
        backgroundColor,
        title,
        desc
    } = props;
    return (
        <div className={`
            ${backgroundColor}
            py-[63px]
        `}>
            <div className={`
            flex 
            max-w-screen-lg 
            ${reverse ? 'flex-row-reverse' : 'flex-row'}
            m-auto
            items-center
            px-[16px]
        `}>
                 <Image
                    src={imageSrc}
                    width={520}
                    height={407}
                /> 
                <div className="w-[38px]"></div>
                <div className="flex-col text-start w-[460px]">
                    <h3 className="text-primary mb-[20px] text-[32px] font-extrabold">{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>

    )
}