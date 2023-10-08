import React, { useState } from "react";
import Data from "./data";
import Card from "./Card";
import "./filter.css";

const Gallry = () => {
    const [menus, setmenus] = useState(Data);

    const filtering = (clickitem) => {
        console.log(clickitem);
        if (clickitem === "all") {
            setmenus(Data);
        }
        else {

            const filteritem = Data.filter(
                (cur) => {
                    return cur.cat === clickitem;
                }

            )
            setmenus(filteritem)
        }

    }
    return (
        <>
            <h1 className="food"> Food Corner </h1>
            <div className="filter-btn">
                <button onClick={() => filtering("all")}>all</button>

                <button onClick={() => filtering("breakfast")}>breakfast</button>
                <button onClick={() => filtering("evening")}>evening</button>
                <button onClick={() => filtering("Afternone")}>Afternone</button>

            </div>
            <div className="container">
                {
                    menus.map((cur) => {
                        return <Card
                            img={cur.img}
                            price={cur.price}
                            cat={cur.cat}
                            name={cur.Name}
                            dis={cur.dis}

                        />

                    })
                }
            </div>

        </>
    );
}
export default Gallry;