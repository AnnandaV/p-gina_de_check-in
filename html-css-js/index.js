let participantes = [
    {
      nome: "Annandis",
      email: "annandis@gmail.com",
      datainscricao: new Date(2024, 2, 17, 19, 30), // ano, mês, dia. hora
      datacheckin: new Date(2024, 2, 18, 20, 50),
    },
    {
      nome: "Bruna",
      email: "bruna@gmail.com",
      datainscricao: new Date(2024, 0, 20, 19, 30),
      datacheckin: null,
    },
    {
      nome: "Fernando",
      email: "fernando@gmail.com",
      datainscricao: new Date(2024, 1, 15, 10, 30),
      datacheckin: new Date(2024, 1, 17, 11, 35),
    },
    {
      nome: "Amanda",
      email: "amanda@gmail.com",
      datainscricao: new Date(2024, 0, 10, 8, 45),
      datacheckin: new Date(2024, 1, 12, 9, 55),
    },
    {
      nome: "Ricardo",
      email: "ricardo@gmail.com",
      datainscricao: new Date(2024, 0, 25, 14, 20),
      datacheckin: new Date(2024, 2, 27, 15, 40),
    },
    {
      nome: "Luana",
      email: "luana@gmail.com",
      datainscricao: new Date(2024, 1, 5, 16, 30),
      datacheckin: new Date(2024, 2, 7, 17, 10),
    },
    {
      nome: "Gabriel",
      email: "gabriel@gmail.com",
      datainscricao: new Date(2024, 0, 8, 12, 15),
      datacheckin:null,
    },
    {
      nome: "Camila",
      email: "camila@gmail.com",
      datainscricao: new Date(2024, 1, 12, 9, 30),
      datacheckin: new Date(2024, 2, 14, 10, 38),
    },
    {
      nome: "Mateus",
      email: "mateus@gmail.com",
      datainscricao: new Date(2024, 0, 20, 14, 50),
      datacheckin: null,
    },
    {
      nome: "Isabela",
      email: "isabela@gmail.com",
      datainscricao: new Date(2024, 1, 3, 11, 30),
      datacheckin: new Date(2024, 2, 5, 12, 13),
    }
  ];
  // arrow == cria uma função
  // substitui o tbody pelo participante
  const cadastro = (participante) => {
    const datainscricao = dayjs(Date.now()).to(participante.datainscricao)

    let datacheckin = dayjs(Date.now()).to(participante.datacheckin)

    //condicional
    if(participante.datacheckin == null) {
      datacheckin = `
        <button
          data-email="${participante.email}"
          onclick="fazercheckin(event)"
        >
          Confirmar Check-in
        </button>
      `
    }

    return ` 
    <tr>
      <td>
        <strong>
          ${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
      </td>
      <td>${datainscricao}</td>
      <td>${datacheckin}</td>
    </tr>
    `
  }
  const atualizarlista = (participantes) => {
    let output = ""

    //repetição - loop:
    for(let participante of participantes) {
      output = output + cadastro(participante)
    }

   //pegar informação HTML
  document.querySelector(`tbody`).innerHTML = output
  }

  atualizarlista(participantes)

  const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosform = new FormData(event.target)

    const participante = {
      nome: dadosform.get(`nome`),
      email: dadosform.get(`email`),
      datainscricao: new Date(),
      datacheckin: null
    }

    //verificação de participante existente
    const participanteExiste = participantes.find(
      (p) => {
        return p.email == participante.email
      }
    )

    if(participanteExiste) {
      alert("E-mail já existe!")
      return
    }

    participantes = [participante, ...participantes]
    atualizarlista(participantes)

    //limpar o forms
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
  }

  const fazercheckin = (event) => {
   //confirmar checkin
   const confirmacao = ("Deseja realmente fazer o check-in?")
    if(confirm(confirmacao) == false) {
      return 
    }

   //encontrar participante
    const participante= participantes.find((p) => {return p.email == event.target.dataset.email})

    participante.datacheckin = new Date()

    atualizarlista(participantes)
  }


// let == variáveis para o valor que pode ser alterado
// const == variavel com o valor fixo
// queryselector é uma ferramenta que permite selecionar elementos no DOM (Document Object Model) de uma página web 