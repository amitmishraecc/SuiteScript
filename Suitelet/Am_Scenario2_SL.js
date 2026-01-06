// Custom form Suitelet script to create and handle an employee registration form
/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

define(['N/ui/serverWidget'], function (serverWidget) {

    function onRequest(context) {

        // =========================
        // HANDLE GET REQUEST (SHOW FORM)
        // =========================
        if (context.request.method === 'GET') {

            // Create custom form
            var form = serverWidget.createForm({
                title: 'Custom Employee Registration Form'
            });

            // Add Name field
            var nameField = form.addField({
                id: 'custpage_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Employee Name'
            });
            nameField.isMandatory = true;

            // Add Email field
            var emailField = form.addField({
                id: 'custpage_email',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email Address'
            });

            // Add Date field
            form.addField({
                id: 'custpage_joining_date',
                type: serverWidget.FieldType.DATE,
                label: 'Joining Date'
            });

            // Add Submit button
            form.addSubmitButton({
                label: 'Submit Form'
            });

            // Render form
            context.response.writePage(form);
        }

        // =========================
        // HANDLE POST REQUEST (FORM SUBMIT)
        // =========================
        else {

            // Read submitted values
            var name = context.request.parameters.custpage_name;
            var email = context.request.parameters.custpage_email;
            var joiningDate = context.request.parameters.custpage_joining_date;

            // Create response page
            var form = serverWidget.createForm({
                title: 'Form Submitted Successfully'
            });

            form.addField({
                id: 'custpage_result',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Result'
            }).defaultValue =
                '<h2>Thank You!</h2>' +
                '<p><b>Name:</b> ' + name + '</p>' +
                '<p><b>Email:</b> ' + email + '</p>' +
                '<p><b>Joining Date:</b> ' + joiningDate + '</p>';

            context.response.writePage(form);
        }
    }

    return {
        onRequest: onRequest
    };
});
