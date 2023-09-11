import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const SearchBoxPage = lazy(() => import("../pages/SearchBoxPage"));
const SearchResultPage = lazy(() => import("../pages/SearchResultPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));

const createLazyElement = (Element) => (
  <Suspense fallback={<>Cargando...</>}>
    <Element />
  </Suspense>
);

export const routes = [
  { path: "/", element: createLazyElement(SearchBoxPage) },
  { path: "/items", element: createLazyElement(SearchResultPage) },
  { path: "/items/:id", element: createLazyElement(ProductDetailPage) },
];

export const router = createBrowserRouter(routes);
