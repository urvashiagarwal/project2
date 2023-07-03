import { Singlecard } from "../Atoms/Singlecard";



const Cards = (props) => {
    const data = [

        {
            image: "https://cdn.pixabay.com/photo/2021/02/04/12/46/coffee-5981220_640.jpg",
            description: "Coffee, Drink, Beverage",
            title: "Coffee",

        },
        {
            image: "https://cdn.pixabay.com/photo/2016/10/06/19/36/pudding-1719824_1280.jpg",
            description: "Pudding, Vanilla pudding, Raspberries",
            title: "Vanilla pudding",

        },
        {
            image: "https://cdn.pixabay.com/photo/2017/06/30/21/58/cake-2459954_640.jpg",
            description: "Cakes, Strawberries, Strawberry tart image",
            title: "Cakes"

        },
        {
            image: "https://cdn.pixabay.com/photo/2018/02/25/12/20/food-3180358_640.jpg",
            description: "Food, Dark, Chocolate image",
            title: "Dark Chocolate",

        },
        {
            image: "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg",
            description: "Pizza, Drink, Food image",
            title: "Pizza",

        },
        {
            image: "https://cdn.pixabay.com/photo/2021/06/04/11/55/burger-6309618_640.jpg",
            description: "Burger, Food, Dish image",
            title: "Burger",

        },
        {
            image: "https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_640.jpg",
            description: "South Indian Food, Vegetarian",
            title: "Sambhar-Dosa",

        },
        {
            image: "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg",
            description: "Breakfast, Idli, Indian- foods",
            title: "Idli-Sambhar",

        },
        {
            image: "https://cdn.pixabay.com/photo/2017/02/25/15/08/dimsum-2097947_640.jpg",
            description: "Dimsum, Chinese cuisine, Chinese image",
            title: "Dimsum",

        },
        {
            image: "https://cdn.pixabay.com/photo/2023/06/27/15/16/rice-8092512_640.jpg",
            description: "Rice, Biriyani, Basmati",
            title: "Veg-Biriyani",

        },
        {
            image: "https://cdn.pixabay.com/photo/2017/01/10/18/00/indian-1969797_640.jpg",
            description: "Indian, Food, Plate, Gujrati Dish",
            title: "Dhokla",

        },
        {
            image: "https://cdn.pixabay.com/photo/2020/02/28/12/43/bibimbap-4887417_640.jpg",
            description: "Bibimbap, Korean, Food image",
            title: "Bibimbap",

        },


    ]
    return (
        <>
            <div className="container">
                <div className="row" >
                    {data.map((items, i) => (
                        <div className="col-3" >
                            <Singlecard data={items} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards;