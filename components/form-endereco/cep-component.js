Vue.component('cep-component', {

    template: '<div class="row"> <div class="col-md-3"> <div class="form-group"> <label for="inputCep">Cep</label> <input type="text" class="form-control" id="inputCep" v-model="cep" v-on:keyup="buscar"> </div> </div> <div class="col-md-9"></div> </div> <p class="text-danger" style="display:none;" v-show="naoLocalizado"><strong>CEP não encontrado!!!</strong></p> <div class="row"> <div class="col-md-5"> <div class="form-group"> <label for="inputLogradouro">Logradouro</label> <input type="text" class="form-control" id="inputLogradouro" v-model="endereco.logradouro" ref="logradouro"> </div> </div> <div class="col-md-2"> <div class="form-group"> <label for="inputNumero">Numero</label> <input type="email" class="form-control" id="inputNumero" ref="numero"> </div> </div> </div> <div class="row"> <div class="col-md-5"> <div class="form-group"> <label for="inputBairro">Bairro</label> <input type="text" class="form-control" id="inputBairro" v-model="endereco.bairro"> </div> </div> <div class="col-md-5"> <div class="form-group"> <label for="inputCidade">Cidade</label> <input type="text" class="form-control" id="inputCidade" v-model="endereco.localidade"> </div> </div> <div class="col-md-2"> <div class="form-group"> <label for="inputEstado">Estado</label> <input type="text" class="form-control" id="inputEstado" v-model="endereco.uf"> </div> </div> </div>',
    data: function() {
        return {
            cep: '',
            endereco: {},
            naoLocalizado: false
        }
    },

    methods: {
        buscar: function() {

            var self = this;

            self.endereco = {};
            naoLocalizado = false
            if (/^[0-9]{5}[0-9]{3}$/.test(this.cep)) {
                jQuery.getJSON('http://viacep.com.br/ws/'+this.cep+'/json', function(endereco) {

                    if(endereco.erro) {
                        $(self.$refs.logradouro).focus();
                        self.naoLocalizado = true;
                        return;
                    }
                    self.endereco = endereco;
                    self.$refs.numero.focus();
                });
            }
        }
    }
});