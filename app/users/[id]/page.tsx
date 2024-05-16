const IdPage = ({
    params
 } : {
        params : {id: string}
    }
) =>{
    return (
        <>
        <div>
            ID page : {params.id}
            
        </div>
        </>
    )
}

export default IdPage;