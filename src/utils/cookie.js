const cookies=(token)=>{
    document.cookie=`accessToken=${token.accessToken};max-age=${
        1*24*60*60
    }`;
    document.cookie=`refreshToken=${token.refreshToken};max-age=${
        30*24*60*60
    }`;
}

const getCookie=(cookieName)=>{
   return document.cookie.split(';').find(i=>i.trim().split('=')[0] === cookieName)?.split('=')[1]
}

export {cookies ,getCookie}