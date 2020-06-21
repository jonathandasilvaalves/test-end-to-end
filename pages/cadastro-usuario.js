const protractorHelper = require("protractor-helper");

class CadastroUsuario {
  constructor() {
    this.campoFormulario = element.all(by.css(".collapsible-header")).get(0);
    this.campoCriarUsuarios = element(
      by.css(".collapsible-body ul li a[href='/users/new']")
    );
    this.urlCadastro = "/users/new";
    this.nome = element(by.id("user_name"));
    this.ultimoNome = element(by.id("user_lastname"));
    this.email = element(by.id("user_email"));
    this.endereco = element(by.id("user_address"));
    this.universidade = element(by.id("user_university"));
    this.profissao = element(by.id("user_profile"));
    this.genero = element(by.id("user_gender"));
    this.idade = element(by.id("user_age"));
    this.buttonCriar = element(by.css("input[type=submit]"));
    this.mensagemSucesso = element(
      by.cssContainingText("#notice","Usuário Criado com sucesso"));
    this.mensagemError = element(
      by.cssContainingText("#error_explanation h2","1 error proibiu que este usuário fosse salvo:"));
  }

  visitHome() {
    browser.get(browser.baseUrl);
  }

  visitCadastro(){
    browser.get(`${browser.baseUrl}/treinamento/home`)
  }

  acessandoPaginaCadastro() {
    protractorHelper.click(this.campoFormulario);
    protractorHelper.click(this.campoCriarUsuarios);
    protractorHelper.waitForUrlToBeEqualToExpectedUrl(
      `${browser.baseUrl}${this.urlCadastro}`
    );
  }

  cadastroNovoUsuario(objeto){
    protractorHelper.fillFieldWithText(this.nome, objeto.nome);
    protractorHelper.fillFieldWithText(this.ultimoNome, objeto.sobrenome);
    protractorHelper.fillFieldWithText(this.email, objeto.email);
    protractorHelper.fillFieldWithText(this.endereco, objeto.endereco);
    protractorHelper.fillFieldWithText(this.universidade, objeto.universidade);
    protractorHelper.fillFieldWithText(this.profissao, objeto.profissao);
    protractorHelper.fillFieldWithText(this.genero, objeto.genero);
    protractorHelper.fillFieldWithText(this.idade, objeto.idade);
    protractorHelper.click(this.buttonCriar);
  }
  
}

module.exports = CadastroUsuario;
