import http from "http";
import { getAllTeams } from "./pages/teams.js";

const PORT = 6000;


const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const teams = getAllTeams();
        res.write(JSON.stringify(teams));
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log("SIH server running", PORT);
});
