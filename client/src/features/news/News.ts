import type { NewsType } from "./newsTypes"

export type News = {
    id: number
    title: string
    slug: string
    content: string
    pictureUrl: string
    newsType: string
    publishedTime: string
}

export type NewsDto = {
    title: string;
    content: string;
    pictureUrl: string;
    newsType: NewsType;
    publishedTime: string;
}