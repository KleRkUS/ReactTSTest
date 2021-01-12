
export interface FetchData {
    userId?: number,
    id: number,
    title?: string,
    body?: string,
    name?: string,
    username?: string,
    email?:string,
    address?:object,
    phone?:string,
    website?:string,
    company?:object
}

export interface FinalResponse {
    status:boolean,
    users:Array<FetchData>,
    posts:Array<FetchData>,
    reason?:object
}

export interface FetchResponse {
    ok:boolean,
    data:Array<FetchData>,
    reason?:object
}