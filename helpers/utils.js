export const  useMediawQuery = (useMediaQuery)=>( {
     isMobileMicroDevice: useMediaQuery({
        query: "(max-device-width: 250px)",
      }),
     isMobileMicroPlusDevice: useMediaQuery({
        query: "(max-device-width: 290px)",
      }),
     isMobileMiniDevice: useMediaQuery({
        query: "(max-device-width: 350px)",
      }),
     isMobileMiniPlusDevice: useMediaQuery({
        query: "(max-device-width: 390px)",
      }),
     isMobileDevice: useMediaQuery({
        query: "(max-device-width: 480px)",
      }),
    
     isMobileDevicePlus: useMediaQuery({
        query: "(max-device-width: 550px)",
      }),
    
       isTabletDevice: useMediaQuery({
        query: "(max-device-width: 768px)",
      }),
       isTabletPlusDevice: useMediaQuery({
        query: "(max-device-width: 900px)",
      }),
  
       isLaptop : useMediaQuery({
        query: "(max-device-width: 1024px)",
    }),
    
     isDesktop :useMediaQuery({
        query: "(max-device-width: 1200px)",
      })
    
      , isBigScreen: useMediaQuery({
        query: "(max-device-width: 1501px)",
      }),
    responsivex:  useMediaQuery({
        query: "(max-device-width: 1700px)",
      })
      , isBigScreenPlus: useMediaQuery({
        query: "(max-device-width: 2000px)",
      }),
  responsive: (value) => {

    return useMediaQuery({
      query: `(max-device-width: ${value}px)`,
    })
        
      },
        
      
      
})