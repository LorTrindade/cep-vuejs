new Vue ({
    el: '#vue',

    data: {
        cep: '',
        endereco: {},
        naoLocalizado: false
    },

    methods: {
        buscar: function() {

            var self = this;
            if (/^[0-9]{5}[0-9]{3}$/.test(this.cep)) {
                jQuery.getJSON('http://viacep.com.br/ws/'+this.cep+'/json', function(endereco) {

                    if(endereco.erro) {
                        $(self.$refs.logradouro).focus();
                        self.naoLocalizado = true;
                        return;
                    }
                    self.endereco = endereco;
                    self.naoLocalizado = false;
                    self.$refs.numero.focus();
                });
            }
        }
    }
});