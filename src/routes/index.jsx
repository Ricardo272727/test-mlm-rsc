import { createBrowserRouter } from "react-router-dom";
import { SearchBoxPage } from "../pages/SearchBoxPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";


export const routes = [
    {path: '/',  element: <SearchBoxPage/> },
    {path: '/items',  element: <SearchResultPage/> },
    {path: '/items/:id',  element: <ProductDetailPage /> },
]

export const router = createBrowserRouter(routes)