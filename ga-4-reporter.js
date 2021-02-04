const ga_4_measurement_id = 'G-47KP9JTKFX';

let dataLayer = [{
  'pageCategory': 'StartPage',
  'visitorType': 'high-value'
}];

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', ga_4_measurement_id);

const GA4 = {
  reportPageLoaded: () => {
    console.log("GA4 page loaded");
    dataLayer.push({'event': 'startPageViewEvent'});
  }
  
  linkClicked: () => {
    console.log("GA4 link clicked");
  }
}

window.addEventListener('load', (event) => {
  GA4.reportPageLoaded();
});
