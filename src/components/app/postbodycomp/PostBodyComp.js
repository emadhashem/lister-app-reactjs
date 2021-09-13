import React from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

function PostBodyComp({ todos = [] }) {
    const [items, setItems] = React.useState(todos);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    console.log(todos)
    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id)

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    }
    return (
        <div>
            <ScrollMenu>
                {items.map(({ id, text }) => (
                    <p
                        onClick={handleClick(id)}
                        key={id}
                    >
                        {text}
                    </p>)
                )}

            </ScrollMenu>
        </div>
    )
}

export default PostBodyComp
