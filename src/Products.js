import Product from "./Product";
function Products()
{
    return (
        <div className="products">
            <Product name="Levi Jeans" price="$100" url="https://5.imimg.com/data5/ANDROID/Default/2020/8/GK/EA/NB/12566067/product-jpeg-500x500.jpg"/>
            <Product name="Laptop" price={1500} url="https://www.reliancedigital.in/medias/HP-V15-fa0998TX-493837767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4OTg2MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGFjL2g2ZC8xMDAxMTg0NzQ5MTYxNC5qcGd8ZDcxZDAzMDRhNjhmMWM4ZTM2YWY2ZjkzMmNlOTEyYzEzMjFjNjE4NTg5YTk2ODcwMDhkOTZiMzJkOTQzZDFmNg"/>
            <Product name="iPhone 13" price={1099} url="https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1" />

        </div>
    )
}

export default Products; 