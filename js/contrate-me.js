const tipoServico = document.getElementById("tipoServico");
const storymakerCampos = document.getElementById("storymakerCampos");
const fotoCampos = document.getElementById("fotoCampos");
const localEnsaio = document.getElementById("localEnsaio");
const localExternoCampo = document.getElementById("localExternoCampo");
const objetosExtras = document.getElementById("objetosExtras");
const listaObjetos = document.getElementById("listaObjetos");
const formEvento = document.getElementById("formEvento");
const formPessoal = document.getElementById("formPessoal");
const continuarBtn = document.getElementById("continuarBtn");
const voltarBtn = document.getElementById("voltarBtn");

tipoServico.addEventListener("change", () => {
  storymakerCampos.classList.add("hidden");
  fotoCampos.classList.add("hidden");
  if (tipoServico.value === "Storymaker")
    storymakerCampos.classList.remove("hidden");
  if (tipoServico.value === "Fotografia") fotoCampos.classList.remove("hidden");
});

localEnsaio.addEventListener("change", () => {
  localExternoCampo.classList.toggle("hidden", localEnsaio.value !== "Externo");
});

objetosExtras.addEventListener("change", () => {
  listaObjetos.classList.toggle("hidden", objetosExtras.value !== "Sim");
});

continuarBtn.addEventListener("click", () => {
  if (!tipoServico.value)
    return alert("Selecione o tipo de serviço antes de continuar.");
  formEvento.classList.add("hidden");
  formPessoal.classList.remove("hidden");
});

voltarBtn.addEventListener("click", () => {
  formPessoal.classList.add("hidden");
  formEvento.classList.remove("hidden");
});

// Modal Preview
const modal = document.getElementById("previewModal");
const mensagemPreview = document.getElementById("mensagemPreview");
const cancelarBtn = document.getElementById("cancelarBtn");
const confirmarBtn = document.getElementById("confirmarBtn");

cancelarBtn.addEventListener("click", () => (modal.style.display = "none"));

formPessoal.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroWhatsApp = "5581991979286"; // seu número aqui

  let mensagem = `📝 *Nova Solicitação de Serviço*%0A`;
  mensagem += `Serviço: ${tipoServico.value}%0A%0A`;

  if (tipoServico.value === "Storymaker") {
    mensagem += `📍 Local: ${localEvento.value}%0A📅 Data: ${dataEvento.value}%0A🕒 Início: ${inicioEvento.value}%0A🕓 Fim: ${fimEvento.value}%0A🎉 Tipo de evento: ${tipoEventoStory.value}%0A`;
  } else {
    mensagem += `📸 Tipo de ensaio: ${tipoEnsaio.value}%0A🏠 Local: ${localEnsaio.value}%0A`;
    if (localEnsaio.value === "Externo")
      mensagem += `📍 Local externo: ${ondeExterno.value}%0A`;
    mensagem += `🎁 Objetos extras: ${objetosExtras.value}%0A`;
    if (objetosExtras.value === "Sim") {
      const objetos = Array.from(
        document.querySelectorAll('input[name="objeto"]:checked')
      ).map((o) => o.value);
      mensagem += `Itens: ${objetos.join(", ")}%0A`;
    }
  }

  mensagem += `%0A👤 *Informações Pessoais*%0A`;
  mensagem += `Nome: ${nome.value}%0A📧 E-mail: ${email.value}%0A📞 Telefone: ${
    telefone.value
  }%0A💬 Observações: ${adicionais.value || "Nenhuma"}%0A`;

  mensagemPreview.textContent = decodeURIComponent(
    mensagem.replace(/%0A/g, "\n")
  );
  modal.style.display = "flex";

  confirmarBtn.onclick = () => {
    modal.style.display = "none";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };
});
