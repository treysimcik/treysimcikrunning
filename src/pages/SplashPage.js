import React from "react"
import RaceSchedule from '../components/RaceSchedule'
import { graphql, useStaticQuery } from "gatsby"
import { createGlobalStyle } from "styled-components";

function SplashPage() {
  const data = useStaticQuery(graphql`
  query { 
    contentfulSplashPage {
      blogTitle
      splashPageText {
        splashPageText
      }
      # Background image
      splashPageBackground {
        title
        file {
          url
        }
      }
    }
  }
`)


  return(
    <div id="main">
    <style>{`
      body {
        background: url(${data.contentfulSplashPage.splashPageBackground.file.url}) no-repeat top center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      div#main {
        color: white;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
        min-height: 100vh;
      }
      h1 {
        font-size: calc(9vh / 3vw);
        padding: 10px 20px;
        flex-grow: 6
      }
      h1 span {
        font-weight: 100;
        display: inline-block;
        margin-left: 20px;
      }
      h2 {
        margin-bottom: 0;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        margin: 10px 20px;
      }
      .race-list {
        flex-grow: 1;
        background: rgba(100,100,100,0.2);
        max-height: 70vh;
        overflow-x: scroll;
      }
      ul {
        margin-top: 10px;
        width: 100%;
        padding-left: 0;
        margin-left: 0;
        padding: 10px 20px;
      }
      li {
        list-style-type: none;
        margin-bottom: 15px;
      }
      li span {
        font-weight: 100;
        display: inline-block;
        margin-left: 20px;
      }
      .footer {
        background: rgba(0,0,0,0.8);
        color: rgba(100,100,100,0.8);
        padding: 10px 20px;
        text-align: center;
        font-size: .8rem;
      }
    `}</style>
      <h1>{data.contentfulSplashPage.blogTitle} <span>{data.contentfulSplashPage.splashPageText.splashPageText}</span></h1>
      <RaceSchedule />
      <div className="footer">&copy; 2019 {data.contentfulSplashPage.blogTitle}</div>
    </div>
  )
}

export default SplashPage
