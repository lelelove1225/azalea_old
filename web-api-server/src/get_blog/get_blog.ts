import axios from "axios";
import { response } from "express";

export function get_blogall() :string {
    let result :string = "";
    axios.get("/aaaa")
    .then((response)=>{
            console.log(response);
        }
    )
    return result
}