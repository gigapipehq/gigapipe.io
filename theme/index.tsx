import Theme from "rspress/theme";

import Footer from "../src/components/footer/Footer";
   

const Layout = () => (
    <Theme.Layout

        afterDocFooter={
           <Footer/>
        }
    />
);

export default {
    ...Theme,
    Layout,
};

export * from "rspress/theme";
