import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalstyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:60px;


    }
    *{
        box-sizing:border-box;
    }
`;

export default globalstyle;
