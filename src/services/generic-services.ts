export class GenericServices {

    public requestPost<T>(url: string, body : object ): Promise<T>{

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
            //body: body
        };

        return this.responseFetcher(url, requestOptions);
    }


    public requestGet<T>(url: string, body : object ): Promise<T>{

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
            //body: body
        };

        return this.responseFetcher(url, requestOptions);
    }

    public requestGetWithoutBody<T>(url: string ): Promise<T>{

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            
            //body: body
        };

        return this.responseFetcher(url, requestOptions);  
    }

    private responseFetcher<T>(url: string, requestOptions: any): Promise<T>{

        return fetch(url, requestOptions)
               .then(response => response.json())
               .catch(function(error){
                   console.log('error', error);
               })  as Promise<T>;
    }
}