import CSS from 'csstype';
import { CSSProperties } from 'react';

export class HtmlInlineStylesConvertor{

    public GetReactStyleByInlineInput(input: string): CSSProperties {       
       
        const result = input.split(';').filter(s => s.length)       
        .reduce((a, b) => {
           const keyValue = b.split(':');
           const value = <string> this.camelizeByInput(keyValue[0]);
           (<any>(a))[value] = keyValue[1]; 
           return a;
         } ,{});

        const h1Styles: CSS.Properties = result;
        return h1Styles;       
    }

    private camelizeByInput(input: string): string {
        return input.replace(/-([a-z])/gi,(s, group) =>  group.toUpperCase());
    }
}

export default HtmlInlineStylesConvertor;


