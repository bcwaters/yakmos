/**
*   Receives a URL as a String and maps it to a collection name
*   example: http://www.google.com/search?v=23412564k
*   
*/ 

class URLConverter{
     
    static convertURL(urlString){
        url = new URL(urlString);
        
        let pathname = url.pathname.split('/').join('');
        console.log(pathname)
        let hostname = '';
        let subdomain = '';
        let TLD = '';
                
        let hostnameParts = url.hostname.split('.')
        //check if array has 3 parts www . gooogle . com
        if(hostnameParts.length>2){
            subdomain = hostnameParts[0];
            hostname = hostnameParts[1];
            TLD = hostnameParts[2]
        }else{
            hostname = hostnameParts[0];
            TLD = hostnameParts[1]
        }
        
       let result = hostname + pathname
        
         if(specialCase[hostname]){
            result = result + specialCase[hostname](url)
        }
        return result
    
    }
    
    
}

const specialCase = {
        'youtube' : (url)=>{return url.searchParams.get('v')!=null?url.searchParams.get('v'):''}
         
    }  

module.exports = URLConverter;