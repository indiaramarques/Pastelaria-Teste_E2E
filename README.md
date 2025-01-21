# **Testes Automatizados para Sistema de Pastelaria**

- Este repositório contém uma suíte de testes automatizados utilizando Pytest e Selenium para testar um sistema de pedidos de uma pastelaria web.

## **Tecnologias Utilizadas**:

- Pytest: Framework para execução dos testes.
- Selenium: Biblioteca para automação de navegação em browsers.
- ChromeDriver: Driver para automação no Google Chrome.

## **Pré-requisitos**

- Antes de rodar os testes, é necessário ter os seguintes itens instalados no seu ambiente:

- Python (versão 3.8 ou superior)
- Google Chrome
- Dependências do projeto (Pytest, Selenium)
- Rodar o docker do projeto `https://github.com/Phl14Fontes/pastry-order-service`

##	Clonar o Repositório

`git clone https://github.com/indiaramarques/Pastelaria-Teste_E2E`
  

## Instalar as Dependências

- pip install -r requirements.txt

## Executar os Testes

- Para rodar os testes, execute o seguinte comando:
`pytest .`

- Alternativamente pode rodar o projeto com o arquivo
  `setup.cmd`

Os testes irão rodar automaticamente no Chrome, e o relatório de execução será exibido no terminal.

## Testes Implementados:

- Validação de item adicionado no carrinho
	- Testa se o item "QUEIJO" foi corretamente adicionado ao carrinho após clicar no botão correspondente.

-	Validação do botão "Cozinha"
	- Verifica se ao clicar no botão "Cozinha", a página exibe o conteúdo esperado.

- Validação do botão "Histórico"
	- Testa se ao clicar no botão "Histórico", a página exibe corretamente o histórico de pedidos.

- Validação de criação de pedido
	- Testa a criação de um pedido ao clicar nos botões de adicionar item ao pedido e finalizá-lo.

- Testa o cancelamento de pedido pelo usuário
	- Testa o processo de cancelamento de um pedido realizado pelo usuário na interface.

-	Testa o cancelamento de pedido pela cozinha
	- Testa o processo de cancelamento de um pedido pela cozinha ao clicar nos botões correspondentes.

