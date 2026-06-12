import template from'../templates/feedback.html';

function feedbackOptions(
    code:any,
    suggestion:any,
    uid:any,
    name:any,
    email:any,
    phone:any
) {
    return ({
        from: 'Marco Túlio <marcotuliomuniz.c@gmail.com>',
        to: 'm.tulio.muniz.m@gmail.com',
        subject: `${code}`,
        html: template(code, suggestion, uid, name, email, phone),
        attachments: [{
            filename: 'email_header.png',
            path: 'public/assets/email_header.png',
            cid: 'emailHeaderPNG'
        }]
    });
}

export default feedbackOptions;