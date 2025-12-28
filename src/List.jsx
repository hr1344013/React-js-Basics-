
function List(props){


    const category = props.category;
    const itemList = props.items;

    //fruits.sort((a , b) => a.name.localeCompare(b.name)); ALPHABEICAL ORDER//  
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); REVERSE ORDER//
    //fruits.sort((a , b ) => a.calories - b.calories); NUMERIC ORDER//
    //fruits.sort((a , b) => b.calories - a.calories);REVERSE NUMERIC ORDER//

    //const lowcalFruits = fruits.filter(fruit => fruit.calories < 100); TO CHECK THE LOW CALORIES FRUITS //
    //const highcalFruits = fruits.filter(fruits => fruits.calories >= 100); TO CHECK FOR THE HIGH CALORIES FRUITS//

     const listItems = itemList.map(itemList => <li key={itemList.id}>
                                                   {itemList.name}: &nbsp;
                                                  <b>{itemList.calories}</b></li>);    
    return(
        <>
        <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
);
}
List.defaultPops = {
    category:"Category",
    items:[],
}
export default List