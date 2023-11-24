var tbarray = [];
const row = document.getElementById("row");
function createarray() {
    tbarray = new Array(parseInt(row.value)).fill(0).map(() => new Array(2).fill(0));
    generatetable();
}
function generatetable() {
    let tb1 = document.getElementById("tb1");
    tb1.innerHTML = "";
    let tbody = "";
    for (let i = 0; i < tbarray.length; i++) {
        tbody += `<tr>
                <td><input type="text" id=inp${i} value="${tbarray[i][0]}"></td>
                <td><input type="text" id=out${i} value="${tbarray[i][1]}"></td>
                </tr> `;
    }
    tb1.innerHTML = tbody;
}
function updatearray() {
    for (let i = 0; i < tbarray.length; i++) {
        let inp = document.getElementById(`inp${i}`);
        tbarray[i][0] = parseInt(inp.value);
        tbarray[i][1] = Math.pow(parseInt(inp.value), 3);
    }
    generatetable();
}
//# sourceMappingURL=index.js.map