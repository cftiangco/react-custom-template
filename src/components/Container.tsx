
interface IContainer {
    children?:any;
}

const Container = ({children}:IContainer) => {
    return (
        <div className="mt-5 h-full w-100 bg-white mx-1 md:mx-5">
            {children}
        </div>
    )
}

export default Container