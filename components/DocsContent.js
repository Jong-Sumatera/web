export default function DocsContent(props) {
   const { data, children } = props;
   console.log(props)
   return (
      <div className="w-full flex bg-primaryLight">
         <div className="flex w-full max-w-screen-lg m-auto px-[16px]">
            <div className="whitespace-pre-wrap text-[15px] my-[100px]">
               {children}
            </div>
         </div>
      </div>
   )
}