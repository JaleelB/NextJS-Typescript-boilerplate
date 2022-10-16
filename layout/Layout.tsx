import React, { ReactElement, useRef } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, mixins } from "../styles";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Navbar from './Navbar';
import Footer from './Footer';

interface ChildrenProps {
  children: ReactElement[]
}

const Layout: React.FC<ChildrenProps>= ({children}) => {

  // const containerRef = useRef(null)

  return (
    <>
      {/* <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
        >    */}
          <div 
            className="page-current"
          >
            <ThemeProvider theme={mixins}>
              <GlobalStyles/>

              <Navbar/>

              <main 
                id="page-content"
              >
                {children}
              </main>
              <Footer/>
            </ThemeProvider>
              
          </div>
        {/* </LocomotiveScrollProvider>  */}
    </>
  )
}

export default Layout