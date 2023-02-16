module.exports = ({ env }) => ({
  
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env("SMTP_PASSWORD"),
          },
        },
        settings: {
          defaultFrom: env('SMTP_EMAIL_CONTACT'),
          defaultReplyTo: env('SMTP_EMAIL_CONTACT'),
        },
      },
    },
  });



  // module.exports = ({ env }) => ({
  //   email: {
  //     config: {
  //       provider: 'sendgrid',
  //       providerOptions: {
  //         apiKey: env('SENDGRID_API'),
  //       },
  //       settings: {
  //         defaultFrom: 'divulgalicv@gmail.com',
  //         defaultReplyTo: 'divulgalicv@gmail.com',
  //       },
  //     },
  //   },
  // });