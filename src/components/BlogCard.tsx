interface card {
    title: string,
    content: string,
    publishedDate: string,
    authorname: string
    id:string
}
export const BlogCard = ({ title, publishedDate, content, authorname }: card) => {
    return (
        <div className='roboto-custom cursor-pointer'>
            <div className='flex flex-col p-2 w-screen max-w-2xl '>
                <div className='flex items-center gap-2'>
                    <div><Avatar name={authorname} /></div>
                    <div>
                        {authorname}
                    </div>
                    <div >
                        <Circle size={2}/>
                    </div>
                    <div className='text-slate-500'>
                        {publishedDate}
                    </div>
                </div>
                <div className='font-bold text-2xl my-1'>
                    {title}
                </div>
                <div className='font-light text-lg'>
                    {content.length>=50?content.substring(0,50)+"...":content}
                </div>
                <div className='my-5 font-normal text-sm text-gray-500'>
                    {Math.ceil(content.length / 100) + " minute(s) read"}
                </div>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200"/>
            </div>
        </div >
    )
}
export function Circle({size}:{size:number}){
    return <div  className={`relative flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500`}>
    </div>
}
export function Avatar({name}:{name:string}){ //defining type there itself
    return <div>
        <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
        </div>
    </div>
}