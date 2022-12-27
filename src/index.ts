import { CanvasTable, CTData, CTColumn, CTOptions } from "canvas-table";

(async () => {
    const canvas = document.getElementById("canvas");

    const data: CTData = [
        ["Alfreds Futterkiste", "Maria Anders", "$400", "Germany"],
        ["Centro comercial Moctezuma", "Francisco Chang", "$200", "Mexico"],
        ["Ernst Handel", "Roland Mendel", "$1400", "Austria"],
        ["Island Trading", "Helen Bennett", "$600", "UK"],
        ["Laughing Bacchus Winecellars", "Yoshi Tannamuri", "$800", "Canada"],
        ["Magazzini Alimentari Riuniti", "Giovanni Rovelli", "$100", "Italy"]
    ];
    const columns: CTColumn[] = [
        { title: "Name" },
        { title: "Contact" },
        { title: "Expense", options: { textAlign: "right" } },
        { title: "Country" }
    ];
    const options: CTOptions = {
        borders: {
            table: { color: "#aaa", width: 1 }
        },
        fit: true,
        title: {
            text: "Expense Report"
        }
    };

    const ct = new CanvasTable(canvas as any, { columns, data, options });
    await ct.generateTable();
})();
