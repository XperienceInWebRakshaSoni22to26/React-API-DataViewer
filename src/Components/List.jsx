import React from 'react';

const List = ({ items }) => {
    if (!items || items.length === 0) return <p > No Data Found < /p>;

    const columns = Object.keys(items[0]); // get column names dynamically

    return ( <
        table border = "1"
        cellPadding = "10"
        style = {
            { borderCollapse: 'collapse' }
        } >
        <
        thead >
        <
        tr > {
            columns.map((col) => ( <
                th key = { col } > { col.toUpperCase() } < /th>
            ))
        } <
        /tr> < /
        thead > <
        tbody > {
            items.map((val) => ( <
                tr key = { val.id } > {
                    columns.map((col) => ( <
                        td key = { col } > {
                            typeof val[col] === 'object' ?
                            JSON.stringify(val[col]) // show object as string (or customize if needed)
                            :
                                val[col]
                        } <
                        /td>
                    ))
                } <
                /tr>
            ))
        } <
        /tbody> < /
        table >
    );
};

export default List;