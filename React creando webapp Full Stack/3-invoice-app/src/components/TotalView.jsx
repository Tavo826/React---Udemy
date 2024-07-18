export const TotalView = ({total}) => {

    return (
        <>
            <div className="row my-3">
                <div className="col">
                    <h5>Total</h5>
                </div>
                <div className="col text-end">
                    <h5>{total}</h5>
                </div>
            </div>        
        </>
    )
}