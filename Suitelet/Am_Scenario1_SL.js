// SIMPLE WELCOME PAGE SUITELET
/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet    
 */
define(['N/ui/serverWidget'], function(serverWidget) {
    function onRequest(context) {
        if (context.request.method === 'GET') { 
            var form = serverWidget.createForm({
                title: 'Welcome to Our Suitelet!'
            });
            form.addField({
                id: 'custpage_welcome_message',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Welcome Message'
            }).defaultValue = '<h1>Hello, welcome to Amit Suitelet page!</h1><p>We are glad to have you here.</p>';
            context.response.writePage(form);
        }
    }
    return {
        onRequest: onRequest
    };  
});