const CadastroUsuario = require("../pages/cadastro-usuario");
const protractorHelper = require("protractor-helper");

describe("Dado que acessei a página de cadastro", () => {
  const cadastroUsuario = new CadastroUsuario();

  beforeEach(() => cadastroUsuario.visitHome());
  afterEach(() => {
    browser.driver.manage().deleteAllCookies();
  });

  let objUsuario = {
    nome: "Jonathan",
    sobrenome: "Alves",
    email: "jonathansilvaalves@teste.com.br",
    endereco: "Rua: Teste nª 695",
    universidade: "Unopar-PR",
    profissao: "Analista de Teste",
    genero: "M",
    idade: "23"
  };

  it("Quando realizo o cadastro sem preencher o nome", () => {
    
    let objUsuario2 = Object.create(objUsuario);
    objUsuario2.nome = "";
    cadastroUsuario.visitCadastro();
    cadastroUsuario.acessandoPaginaCadastro();
    cadastroUsuario.cadastroNovoUsuario(objUsuario2);
    protractorHelper.waitForElementVisibility(cadastroUsuario.mensagemError);
  });
  
  it("Quando realizo o cadastro com sucesso", () => {
    cadastroUsuario.visitCadastro();
    cadastroUsuario.acessandoPaginaCadastro();
    cadastroUsuario.cadastroNovoUsuario(objUsuario);
    protractorHelper.waitForElementVisibility(cadastroUsuario.mensagemSucesso);
  });
  
});
