export const localCSS = `
<style>
    html {
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        overflow-x: hidden;
        overflow-y: scroll;
        margin: 0px;
        padding: 0px;
        font-size: 1rem;
        width: 100vw;
        height: auto;
        background-color: #222222;
        color: #f1f1f1;
        /* background-image: linear-gradient(215deg,
                rgba(73, 145, 64, 0.99),
                rgba(58, 158, 158, 0.99),
                rgba(59, 82, 146, 0.99),
                rgba(150, 59, 142, 0.99),
                rgba(153, 55, 55, 0.99),
                rgba(168, 103, 50, 0.99),
                rgba(139, 153, 46, 0.99));
            background-size: 100%;
            animation: backGroundMove 60s ease infinite; 
        */
    }

    @media (prefers-color-scheme: light) {

        /* Light mode CSS styles */
        body {
            background-color: #f1f1f1;
            color: #222222;
        }

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card {
            color: #222222; !important;
            background-color: rgba(10, 10, 10, 0.2); !important;
        }
    }

    @media (prefers-color-scheme: dark) {

        /* Dark mode CSS styles */
        body {
            background-color: #222222;
            color: #f1f1f1;
        }

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card {
            color: #f1f1f1; !important;
            background-color: rgba(100, 100, 100, 0.1); !important;
        }

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>div.header {}
    }

    header.header {
        position: static;
        width: 100%;
        height: auto;
        text-align: center;
        margin-top: 1rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    header.header>div.hitoko {
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 2rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        text-align: center;
        font-size: 1rem;
        padding: 0.2rem;
    }

    header.header>div.hitoko>p {
        margin: 0px;
        padding: 0px;
    }

    header.header>div.hitoko>p:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    header.header>div.head-container {
        text-align: center;
        display: block;
        width: auto !important;
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }

    header.header>div.head-container>h1.title-div {
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        display: inline-table;
    }

    header.header>div.head-container>h1.title-div>i.glob-icon {
        display: table-cell;
    }

    header.header>div.head-container>h1.title-div>div.title {
        display: table-cell;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }

    header.header>div.head-container>h1.title-div>div.title>div.sub-title {
        font-size: 0.95rem;
        font-weight: normal;
        padding-left: 3rem;
        color: rgb(130, 130, 130);
    }

    div.search-engine-wrapper {
        position: sticky;
        top: 0;
        z-index: 1;
        width: 100%;
        padding-left: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-right: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        backdrop-filter: blur(1rem);
    }

    div.search-engine-wrapper>div.search-engine-container{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr minmax(40rem, 2fr) 1fr;
        grid-template-rows: auto;
        line-height: 4rem;
    }

    div.search-engine-wrapper>div.search-engine-container>img.search-engine-favicon-top-left-float {
        z-index: 3;
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        margin-top: 0;
        margin-left: 0;
        margin-right: -3.3rem;
        margin-bottom: 0;
        padding: auto 0rem;
        justify-self: end;
        align-self: center;
        clip-path: circle(50%);
    }

    div.search-engine-wrapper>div.search-engine-container>label {
        display: none;
    }

    div.search-engine-wrapper>div.search-engine-container>input#searchinput {
        z-index: 2;
        display: inline-block;
        justify-self: stretch;
        align-self: center;
        vertical-align: middle;
        overflow: visible;
        text-align: left;
        font-size: 1.3rem;
        padding-left: 4rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-right: 4rem;
        border-top: solid 0rem rgba(0, 0, 0, 0);
        border-left: solid 0rem rgba(0, 0, 0, 0);
        border-right: solid 0rem rgba(0, 0, 0, 0);
        border-bottom: solid 0rem rgba(0, 0, 0, 0);
        border-radius: 0.8rem;
        background: rgba(255, 255, 255, 0.9);
        color: rgb(0, 0, 0);
        outline: solid 0rem rgba(0, 0, 0, 0);
        box-shadow: inset 0.1rem 0.1rem 1rem 0rem rgba(0, 0, 0, 0.5),
            -0.1rem -0.1rem 2rem 0rem rgba(255, 255, 255, 0.1)
    }

    div.search-engine-wrapper>div.search-engine-container>i.search-engine-button {
        z-index: 3;
        display: inline-block;
        justify-self: start;
        align-self: center;
        vertical-align: middle;
        margin-top: 0rem;
        margin-left: -3.5rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 2.5rem;
        color: #222222;
    }

    div.search-engine-wrapper>div.search-engine-container>i.search-engine-button:hover {
        cursor: pointer;
        color: rgb(124, 124, 124);
        transition: all 0.1s !important;
    }

    div.search-engine-wrapper>div.search-engine-container>i.search-engine-button>svg{
        position: relative;
        top: -0.4rem;
    }

    div.search-engine-wrapper>div.search-engine-switch-menu {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
        padding-right: 0rem;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
    }

    div.search-engine-wrapper>div.search-engine-switch-menu>a.item:hover {
        cursor: pointer;
        letter-spacing: 0.3rem;
        transition: all 0.1s ease-in-out !important;
    }

    div.search-engine-wrapper>div.search-engine-switch-menu>a.item {
        flex: 0 0 auto;
        user-select: none;
        padding-left: 1.5rem;
        padding-top: .6rem;
        padding-bottom: 1rem;
        padding-right: 1.5rem;
        margin-top: 0rem;
        margin-left: -0px;
        margin-right: -0px;
        margin-bottom: 1.5rem;
        border-top-left-radius: 0rem;
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        border-left: 0px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: 0rem 1rem 2rem 0rem rgba(0, 0, 0, 0.2);
        letter-spacing: 0.1rem;
        backdrop-filter: blur(1rem);
    }

    div.search-engine-wrapper>div.search-engine-switch-menu>a.item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
        transform: skewX(45deg) translateX(0);

    }

    div.search-engine-wrapper>div.search-engine-switch-menu>a.active {
        background-color: rgba(255, 255, 255, 0.3);
        letter-spacing: 0.3rem;
    }

    div.scrollable {
        width: 100%;
        height: auto;
        margin-top: 0rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    div.scrollable>main.main {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 5rem;
    }

    div.scrollable>main.main>div.quicklink-div {
        margin-left: 5%;
        margin-right: 5%;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink {
        margin-top: 1rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider {
        font-size: 1.8rem;
        font-weight: normal;
        margin-top: 2.5rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0.8rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        position: relative;
        display: flex;
        align-items: center;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider:before,
    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider:after {
        content: "";
        flex-grow: 1;
        height: 2px;
        margin: 0rem 1rem;
        background-color: rgba(200, 200, 200, 0.9);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider>i.quicklink-icon {
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 1rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card:visited {
        text-decoration: none;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card {
        text-decoration: none;
        flex-basis: calc(20%);
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: .6rem;
        margin-right: .6rem;
        padding: 0rem;
        border: none;
        border-radius: 1rem;
        background-color: rgba(100, 100, 100, 0.1);
        box-shadow: 1rem 1rem 2rem 0rem rgba(255, 255, 255, 0.2),
            -1rem -1rem 2rem 0rem rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(2rem);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card:hover {
        box-shadow: 1rem 1rem 2rem 0rem rgba(255, 255, 255, 0.2),
            -1rem -1rem 2rem 0rem rgba(0, 0, 0, 0.2),
            inset 1rem 1rem 1rem 0rem rgba(255, 255, 255, 0.05),
            inset -1rem -1rem 1rem 0rem rgba(200, 200, 200, 0.05);
        transition: all 0.2s ease-out !important;
        backdrop-filter: blur(10rem);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content {
        margin: 0rem;
        padding: 1rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>img.card-favicon-top-left-float {
        width: 3rem;
        height: 3rem;
        margin-right: 1em;
        margin-bottom: 1em;
        clip-path: circle(50%);
        position: relative;
        float: left;
        vertical-align: middle;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>div.header {
        font-size: 1rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>div.meta {
        font-size: 0.9rem;
    }

    footer.footer {
        color: rgb(201, 201, 201);
        position: fixed;
        display: flex;
        align-items: end;
        justify-content: center;
        bottom: 0;
        left: 0;
        height: 2.5rem;
        width: 100%;
        margin: 0rem;
        padding-bottom: 0.5rem;
        text-align: center;
        font-size: 0, 85rem;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(255, 255, 255, 0));
    }

    footer.footer>div.footer-div>a.label {
        color: rgb(201, 201, 201);
        background-image: linear-gradient(to top, rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.6));
        border-radius: 0.2rem;
        text-decoration: none;
        padding: 0.3rem 0.5rem 0rem 0.4rem;
    }

    footer.footer>div.footer-div>a.label:visited {
        color: rgb(201, 201, 201);
        text-decoration: none;
    }

    @keyframes backGroundMove {
        0% {
            background-position: 0% 0%;
        }

        50% {
            background-position: 100% 100%;
        }

        100% {
            background-position: 0% 0%;
        }
    }
</style>

<style>
    /* 通用样式 */
    .prevent-select {
        /* Safari */
        -webkit-user-select: none;
        /* Firefox */
        -moz-user-select: none;
        /* IE10+/Edge */
        -ms-user-select: none;
        /* Standard syntax */
        user-select: none;
    }

    .svg-icon {
        width: 1em;
        height: 1em;
    }

    * {
        box-sizing: border-box;
    }
</style>

<style>
    /* 手机端样式表 mobile css */
    @media screen and (max-width: 767px) {

        /* 手机竖屏 mobile potriat */

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }

        div.scrollable>main.main {
            margin-top: auto;
            margin-bottom: auto;
        }

        .card {
            flex-basis: calc(100% - 3rem);
        }

        .card>.content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .card>.content>.header {
            flex-basis: 25%;
            margin: .5rem;
        }

        .card>.content>.meta {
            flex-basis: 50%;
            margin: .5rem;
        }

        div.search-engine-wrapper>div.search-engine-container{
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr 85vw 1fr;
            grid-template-rows: auto;
            line-height: 4rem;
        }

        div.search-engine-wrapper>div.search-engine-container>i.search-engine-button {
            display: none;
        }

        div.search-engine-wrapper>div.search-engine-switch-menu>a.item {
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            margin: 0;
        }

        div.search-engine-wrapper>div.search-engine-switch-menu>a.item::before {
            display: none;
        }

        footer.footer {
            position: relative;
        }
    }

    @media screen and (max-height: 480px) {

        /* 手机横屏 mobile landscape */
        body {
            flex-direction: row;
        }

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }

        .card {
            flex-basis: calc(100% - 3rem);
        }

        .card>.content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .card>.content>.header {
            flex-basis: 25%;
            margin: .5rem;
        }

        .card>.content>.meta {
            flex-basis: 50%;
            margin: .5rem;
        }

        div.search-engine-wrapper>div.search-engine-container>i.search-engine-button {
            display: none;
        }

        div.search-engine-wrapper>div.search-engine-switch-menu>a.item {
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            margin: 0;
        }

        div.search-engine-wrapper>div.search-engine-switch-menu>a.item::before {
            display: none;
        }

    }
</style>

<style>
    /* 滚动条样式 scroll bar css */
    /* Set the width of the scrollbar */
    body ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 8px;
    }

    /* Set the background color of the scrollbar track to transparent */
    body ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0;
    }

    /* Set the color and style of the scrollbar handle */
    body ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 5px;
        background: rgba(0, 0, 0, .25);
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
    }

    /* Set the color of the scrollbar handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }

    /* Set the width and color of the scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #c3c3c3 transparent;
    }

    /* Set the color of the scrollbar handle on hover */
    *::-moz-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }

    /* Set the width and color of the scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #c3c3c3 transparent;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    /* Set the color of the scrollbar handle on hover */
    *::-webkit-scrollbar-thumb:hover,
    *::-moz-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }
</style>
`;