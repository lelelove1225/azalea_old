import axios from "axios";
import dotenv from "dotenv";

class AxiosConfig {
    header!: string;
    url!: string;
    constructor(header: string, url: string){
        this.header = header;
        this.url = url;
    }
}

class BlogAxiosConfig extends AxiosConfig{
    id? :string;
    constructor(header: string, url: string, id?:string){
        super(header, url);
        this.id = id;
    }
}

export function getBlogAll() :string {
    dotenv.config();
    const axiosConfig = new BlogAxiosConfig(process.env.X_API_KEY!, process.env.BLOG_API_ENDPOINT!);
    let result :string = "";
    axios.get(axiosConfig.url, {
        headers:{
            "X-API-KEY":axiosConfig.header
        }
    })
    .then((res) => {
        result = res.data.contents;
        //console.log(result);
    })
    .catch((res) => {
        //console.log(res);
    });
    return result;
}

export function getBlog(id: string) :string {
    dotenv.config();
    const axiosConfig = new BlogAxiosConfig(process.env.X_API_KEY!, process.env.BLOG_API_ENDPOINT!, id);
    let result :string = "";
    axios.get(axiosConfig.url, {
        headers:{
            "X-API-KEY":axiosConfig.header
        }
    })
    .then((res) => {
        result = res.data.content;
    })
    .catch((res) => {
        //console.log(res);
    });
    return result;
}

// 非同期を待ってないから何も出ない
const res :string = getBlogAll();
console.log(res);