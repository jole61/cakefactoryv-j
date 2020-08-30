$(function () {


   $("#formID").validate({
      rules: {
         name: {
            required: true,
            minlength: 3
         },
         email: {
            required: true,
            email: true
         },
         tel: {
            required: true,
            digits: true
         },
         msg: {
            required: true
         }
      },
      messages: {
         name: {
            required: 'Potrebno je da ukucate vaše ime i prezime.',
            minlength: 'Potrebno je ukucati minimum 3 karaktera'
         },
         email: {
            required: 'Potrebno je da ukucate vaš email',
            email: 'Email nije validan'
         },
         tel: {
            required:' Potrebno je da ukucate vaš kontakt telefon',
            digits: 'Kucati samo brojeve'
         },
         msg: {
            required: 'Potrebno je ukucati poruku.'
         }
      }
   });
});