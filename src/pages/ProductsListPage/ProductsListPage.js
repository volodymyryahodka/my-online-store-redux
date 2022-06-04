import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';

import {getAllProducts} from "../../store/slices/products.slice";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import './ProductsListPageStyle.css';


const ProductsListPage = () => {

    const {error, productsArr, currentPage, totalProductsPage} = useSelector(store => store.products);
    const dispatch = useDispatch();

    const page = 1;


    useEffect(() => {
        dispatch((getAllProducts(page)))
    }, []);


    return (
        <div className={'products'}>
            {error && <h1>{error}</h1>}

            <div className={'products-all'}>{
                productsArr && productsArr.map(prod => <ProductCard key={prod.id} product={prod}/>)
            }</div>

            <Pagination totalProductsPage={totalProductsPage} currentPage={currentPage} pageChange={getAllProducts}/>

        </div>
    );
};

export default ProductsListPage;