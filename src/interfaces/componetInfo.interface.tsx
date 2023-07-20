import { ReactNode } from "react";

export interface componentInfo {
    name: string,
    author: string,
    location: string,
    source: string,
    component: ReactNode
    tags: string[]
}