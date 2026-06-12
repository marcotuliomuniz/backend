import template from'../templates/email.html';

function emailOptions(code:any, to:any) {
    return ({
        from: 'Marco Túlio <marcotuliomuniz.c@gmail.com>',
        to,
        subject: `Use o código ${String(code).toUpperCase()} para se autenticar!`,
        html: template(String(code).toUpperCase()),
        attachments: [{
            filename: 'email_header.png',
            path: 'public/assets/email_header.png',
            cid: 'emailHeaderPNG'
        }]
    });
}

export default emailOptions;