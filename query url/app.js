const http = require("http");
const url = require("url");

const dataBase = {
    users: [
        { id: 1, name: "reza", age: 40, password: "rez128445" },
        { id: 2, name: "ali", age: 42, password: "al45789" },
        { id: 3, name: "safoora", age: 40, password: "saf789564" },
        { id: 4, name: "mona", age: 40, password: "mon432342" },
    ],
    courses: [
        { id: 1, title: "React-Js", price: 800_000 },
        { id: 2, title: "HTML-CSS", price: 600_000 },
        { id: 3, title: "Node-Js", price: 850_000 },
    ],
};

const httpServer = http.createServer((req, res) => {
    const myQuery = url.parse(req.url, true).query;
    const myTable = url.parse(req.url).pathname.split("/")[1];
    const tableFound = Object.keys(dataBase).find((item) => {
        return item === myTable;
    });
    if (tableFound) {
        console.log(myTable);
        const itemFound = dataBase[myTable].find((item) => item.id == myQuery.id);

        (itemFound && res.end(JSON.stringify(itemFound))) ||
            (!itemFound && res.end(`Error 404 : ${myTable} ID not found`));
    } else {
        res.end(`Error 404 : ${myTable} not found`);
    }
});

httpServer.listen(3000);
