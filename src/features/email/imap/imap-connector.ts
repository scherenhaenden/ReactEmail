//import * as imaps from 'imap-simple/lib/imap';
//var Imap = require('imap');
    //inspect = require('util').inspect;

export class ImapConnector{


    public getConnection(user: string, password: string,  host: string) {

        

    }

    public generateConnectionForTest() {

        //const userConfigurationModel = new UserConfigurationModel();

        /*var config = {
            imap: userConfigurationModel
        };

        var connection = {};
        var messages = {};
        var item = {};


        //let value = imaps.connect(config);

        //console.log("TEST", value);
        */
        
        
        
        
        /*.then( (connection) => {
            return connection.openBox('INBOX').then(function () {
                var searchCriteria = ['1:5'];
                var fetchOptions = {
                    bodies: ['HEADER', 'TEXT'],
                };
                return connection.search(searchCriteria, fetchOptions).then((messages) => {
                    messages.forEach(function (item) {
                        var all = _.find(item.parts, { "which": "TEXT" })
                        var html = (Buffer.from(all.body, 'base64').toString('ascii'));
                        console.log(html)
                    });
                });
            });
        });*/







        /*imaps.connect(config).then(function (connection) {
            return connection.openBox('INBOX').then(function () {
                var searchCriteria = ['1:5'];
                var fetchOptions = {
                    bodies: ['HEADER', 'TEXT'],
                };
                return connection.search(searchCriteria, fetchOptions).then(function (messages) {
                    messages.forEach(function (item) {
                        var all = _.find(item.parts, { "which": "TEXT" })
                        var html = (Buffer.from(all.body, 'base64').toString('ascii'));
                        console.log(html)
                    });
                });
            });
        });*/

        

    }

    public getConnectorTest() {

    }


   
}


export default ImapConnector;