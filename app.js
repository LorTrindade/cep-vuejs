new Vue ({
    el: '#vue',

    data: {
        cep: '',
        endereco: {},
    },

    methods: {
        buscar: function() {

            var self = this;
            if (/^[0-9]{5}[0-9]{3}$/.test(this.cep)) {
                jQuery.getJSON('http://viacep.com.br/ws/'+this.cep+'/json', function(endereco) {

                    self.endereco = endereco;
                    self.$refs.numero.focus();
                });
            }
        }
    }
});