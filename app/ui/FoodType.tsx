import Pill from "./Pill";


export default function FoodType({
    type
} : {
    type : "main" | "dessert" | "cocktail" | "sweet" | "salty" | "first"
}) {

    let label : string = "Hors catégorie";
    let bgColor : string = "bg-foodType-mainBg";
    let textColor : string = "text-foodType-mainText";

    switch (type) {
        case "main": 
            label = "Plat";
            bgColor = "bg-foodType-mainBg";
            textColor = "text-foodType-mainText";
        break;
        case "dessert": 
            label = "Dessert";
            bgColor = "bg-foodType-dessertBg";
            textColor = "text-foodType-dessertText";
        break;
        case "cocktail": 
            label = "Cocktail";
            bgColor = "bg-foodType-cocktailBg";
            textColor = "text-foodType-cocktailText";
        break;
        default:
            break;
    }
    return (
        <Pill label={`${label}`} bgColor={`${bgColor}`} textColor={`${textColor}`}></Pill>
    )
}