import React from 'react'

function products() {



const cheap=() =>{
    const cheap=products.filter((i)=>i.unitPrice<70)
    setProducts(cheap)

}
const expensive=()=>{

}


    return (
        <>
            <div>products</div>
            <div>
                <button>SHOW CRİTİC STOCK </button>
                <button>SHOW ALL</button>
            </div>
            <div>
                <button onClick={cheap} >CHEAP</button>
                <button onClick={expensive}>EXPENSİVE</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>STOCK</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>

        </>

    )
}

export default products