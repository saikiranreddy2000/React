const Contact=()=>{
    return (
        <div className="p-1">
            <h1>contact page</h1>
            <form className="flex flex-col w-4/12 p-2">
                <input type="text" placeholder="name" className="border border-black m-1"/>
                <input type="text" placeholder="number" className="border border-black m-1"/>
                <button className="btn bg-green-800 text-white">Submit</button>
            </form>
        </div>
    )
}
export default Contact