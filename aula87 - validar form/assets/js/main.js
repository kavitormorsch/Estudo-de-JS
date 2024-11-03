class ValidateForms
{
    constructor()
    {
        this.form = document.querySelector('.form');
        this.events();
    }

    events()
    {
        this.form.addEventListener('submit', e => 
            {
                this.handleSubmit(e);
            });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        const validFields = this.checkFields();
        const passwordFields = this.checkPWFields();

        if(validFields && passwordFields)
        {
            alert('Form sent.');
            this.form.submit();
        }

    }

    checkPWFields()
    {
        let valid = true;

        const password = this.form.querySelector('.input_password');
        const passwordRepeat = this.form.querySelector('.input_passwordrepeat');
        console.log(password);
        if(password.value !== passwordRepeat.value)
        {
            valid = false;
            this.createError(password, "As senhas precisam ser iguais.");
            this.createError(passwordRepeat, "As senhas precisam ser iguais.");
        }

        if( password.value.length < 6 || password.value.length > 12)
            {
                valid = false;
                this.createError(password, 'Senha precisa ter entre 6 a 12 caracteres.')   ;
            }
        return valid;
    }

    checkFields()
    {
        let valid = true;


        for(let errorText of this.form.querySelectorAll('.error-text'))
            {
                errorText.remove();
            }

        for (let field of this.form.querySelectorAll('.validate'))
        {
            const label = field.previousElementSibling.innerHTML;
            if(!field.value)
            {
                
                this.createError(field, `Campo "${label.slice(0, label.length - 1)}" não pode estar vazio.`);
                valid = false;
            }

            if(field.classList.contains('input_cpf'))
            {
                if (!this.validateCPF(field)) valid = false;
            }

            if(field.classList.contains('input_username'))
                {
                    if (!this.validateUsername(field)) valid = false;
                }
        }

        return valid;
    
    }

    validateCPF(cpfField)
    {
        const cpf = new ValidateCPF(cpfField.value);
        if(!cpf.validate())
        {
            this.createError(cpfField, 'Cpf Inválido.');
            return false;
        }

        return true;
    }

    validateUsername(usernameField)
    {
        const user = usernameField.value;
        let valid = true;

        if( user.length < 3 || user.length > 13)
        {
            this.createError(usernameField, 'Nome de usuário precisa ter entre 3 a 13 caracteres.')
            valid = false;
        }

        if( !user.match(/^[a-zA-Z0-9]+$/g))
            {
                this.createError(usernameField, 'Nome de usuário pode apenas ter letras e/ou números.');
                valid = false;
            }

        return valid;
    }

    createError(field, msg)
    {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add("error-text");

        field.insertAdjacentElement('afterend', div);
    }
}








const validate = new ValidateForms;