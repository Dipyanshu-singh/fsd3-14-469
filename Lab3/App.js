import http from "http";
import { getAllTeams } from "./pages/teams.js";

const PORT = 6000;
const sendJSON=(res,statusCode,data)=>{
    res.writeHead(statusCode,{"content-type":"application/json"});
    res.end(data === "undefined" ? "":JSON.stringify(data));
}
const parseBody =(req)=>{
    new Promise((resolve,reject)=>{
        let body = "";
        req.on("data",(chunk)=>{
            body +=chunk.toString();
        });
        req.on("end",()=>{
            try{
                resolve(body ? JSON.parse(body):{});
            }
            catch (error){
                reject(error);
            }
        });
    });
};

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
