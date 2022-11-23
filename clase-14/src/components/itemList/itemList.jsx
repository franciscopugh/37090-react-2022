import Item from "../item/Item";

const ItemList = ({productsList}) => {
    return (
        <>
        
            {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default ItemList;
