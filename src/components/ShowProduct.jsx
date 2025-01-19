export default function ShowProduct({ productDetails, children }) {
    return (
        <div>
            <h1>{productDetails.name}</h1>
            <p>Product category is : {productDetails.category}</p>
            <p>Product price is : {productDetails.price}</p>
            {children}
        </div>
    )
}
