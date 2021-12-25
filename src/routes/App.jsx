import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from "@containers/Home";
import { Checkout } from "@containers/Checkout";
import { Information } from "@containers/Information";
import { Payment } from "@containers/Payment";
import { Success } from "@containers/Success";
import { NotFound } from "@containers/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/checkout" element={<Checkout />}></Route>
                    <Route exact path="/checkout/information" element={<Information />}></Route>
                    <Route exact path="/checkout/payment" element={<Payment />}></Route>
                    <Route exact path="/checkout/success" element={<Success />}></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { App }
