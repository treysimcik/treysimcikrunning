import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function SplashPage() {
  const data = useStaticQuery(graphql`
  query { 
    contentfulSplashPage {
      blogTitle
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
        background: radial-gradient(
          circle closest-corner at center 225px,
          #222,
          black
        ) no-repeat;
      }

      div#main {
        color: white;
        min-height: 100vh;
        display: grid;
        grid-template-rows: [header] .4fr [content] 6fr [footer] .2fr;
        grid-template-columns: [leftsidebar] 1fr [content] 9fr [rightsidebar] 1fr;
        grid-gap: 15px 10px;
      }
      img {
        display: block;
        position: relative;
        width: 100%;
        height: auto;
        grid-column: content;
        grid-row: content;
        border: 10px solid rgba(0,0,0,0.3);
        margin: auto;
      }
      .footer {
        background: rgba(0,0,0,0.8);
        color: rgba(100,100,100,0.8);
        padding: 10px 20px;
        text-align: center;
        font-size: .8rem;
        grid-column: 1/4;
        grid-row: footer;
      }
    `}</style>

      <div className="header">&nbsp;</div>
      <img src={data.contentfulSplashPage.splashPageBackground.file.url} alt={data.contentfulSplashPage.splashPageBackground.title} height="929" width="619" /> 
      <div className="footer">&copy; 2019 {data.contentfulSplashPage.blogTitle}</div>
    </div>
  )
}

export default SplashPage