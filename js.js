var styles = `
.cowpay-payment-container {
    position: relative;
    width: 100%;
  }
  
  .cowpay-payment-responsive-iframe {
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height:1200px;
    border: none;
  }
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet);
let data;
const Cowpay = {
    mount:function(section){
      let div = document.getElementById(section);
      div.appendChild(frame.buildIframe(frame.constructIframeLink(data)));
    },
    checkout:function(clientSecret,frameCode){
      data = {
        clientSecret:clientSecret,iframecode:frameCode
      }
      return this;
    }
  }

  var frame = {
    buildIframe:function(link){
        var alreadyExist = document.getElementById('ifrm')
        if(alreadyExist != null)
          return alreadyExist;
        var frameContainer = document.createElement('div');
        frameContainer.classList.add('cowpay-payment-container')
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'ifrm');
        ifrm.classList.add("cowpay-payment-responsive-iframe")
        ifrm.setAttribute('src', link);
        frameContainer.appendChild(ifrm);
        return frameContainer;
    },
    constructIframeLink(data){
        return "http://localhost:4200/customer-iframe?intention="+data.clientSecret+"&frameCode="+data.iframecode;
    }
}