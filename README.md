#CSS changes for EMPLOYEE DIRECTORY dashboard

This document highlights the custom CSS changes for the color text, background color, font and box

```css

@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Changa+One:ital@0;1&family=Funnel+Display:wght@300..800&family=Hedvig+Letters+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

body {
    font-family: "Assistant", sans-serif; /*new font*/
    font-optical-sizing: auto;
    font-style: normal;

    text-align: center;
    background-color: #292727;
}

header h1 {
    font-size: 1.25em;
    color: #F0F0F5; /*new color*/
    margin-top: 35px;
}


.card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    cursor: pointer;
    width: 100%;
    max-width: 360px;
    margin: 10px 10px 20px;
    padding: 10px;
    background: #1f1f29; /*new background*/
    border-radius: 0.25em;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: .4s ease-out;
    overflow: hidden;
}

/* Hover effect - for improve visual feedback when user hover cards*/
.card:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}