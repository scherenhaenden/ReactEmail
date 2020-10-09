export class GenericServices {

    public requestGetWithoutBody<T>(url: string): Promise<T>{

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            /*body: JSON.stringify({ title: 'React POST Request Example' })*/
        };

        return this.responseFetcher(url, requestOptions);
    }


    private responseFetcher<T>(url: string, requestOptions: any): Promise<T>{

        return fetch(url, requestOptions)
               .then(response => response.json())  as Promise<T>;
    }
}