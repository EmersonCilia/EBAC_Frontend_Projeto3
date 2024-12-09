$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "Seu nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Insira um e-mail válido."
            },
            mensagem: {
                required: "Por favor, insira sua mensagem.",
                minlength: "A mensagem deve ter pelo menos 10 caracteres."
            }
        },
        submitHandler: function (form) {
            alert("Sua mensagem foi enviada");
            $(form).trigger("reset");
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });

});

