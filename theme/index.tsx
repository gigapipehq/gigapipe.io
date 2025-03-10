import { Layout as BasicLayout } from 'rspress/theme';

import Footer from "../src/components/footer/Footer";
   

const Layout = () => (
    <BasicLayout

        afterDocFooter={
           <Footer/>
        }
    />
);

export default {
    Layout,
};

export * from "rspress/theme";
