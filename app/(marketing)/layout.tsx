const MarketingLayout = ({
    children
}:{
    children:React.ReactNode;
}) =>{
    return (
        <div className="h-full bg-slate-100">
            {/* {Navbar} */}
            <nav className="bg-slate-500 flex justify-around items-center">
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Contact us</ul>
            </nav>
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            {/* footer */}
        </div>
    )
}

export default MarketingLayout;