// Elementos principais
const tipoServico = document.getElementById("tipoServico");
const storymakerCampos = document.getElementById("storymakerCampos");
const formEvento = document.getElementById("formEvento");
const formPessoal = document.getElementById("formPessoal");
const continuarBtn = document.getElementById("continuarBtn");
const voltarBtn = document.getElementById("voltarBtn");

// Campos Storymaker
const localEvento = document.getElementById("localEvento");
const dataEvento = document.getElementById("dataEvento");
const inicioEvento = document.getElementById("inicioEvento");
const fimEvento = document.getElementById("fimEvento");
const tipoEventoStory = document.getElementById("tipoEventoStory");

// Campos pessoais
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const adicionais = document.getElementById("adicionais");

// Modal
const modal = document.getElementById("previewModal");
const mensagemPreview = document.getElementById("mensagemPreview");
const cancelarBtn = document.getElementById("cancelarBtn");
const confirmarBtn = document.getElementById("confirmarBtn");

// Sempre mostrar os campos de Storymaker
storymakerCampos.classList.remove("hidden");

// Etapas
continuarBtn.addEventListener("click", () => {
  formEvento.classList.add("hidden");
  formPessoal.classList.remove("hidden");
});

voltarBtn.addEventListener("click", () => {
  formPessoal.classList.add("hidden");
  formEvento.classList.remove("hidden");
});

// Fechar modal
cancelarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Envio
formPessoal.addEventListener("submit", (e) => {
  e.preventDefault();

  const numeroWhatsApp = "5581981013497";

  let mensagem = `📝 *Nova Solicitação de Storymaker*%0A%0A`;

  mensagem += `📍 Local: ${localEvento.value}%0A`;
  mensagem += `📅 Data: ${dataEvento.value}%0A`;
  mensagem += `🕒 Início: ${inicioEvento.value}%0A`;
  mensagem += `🕓 Fim: ${fimEvento.value}%0A`;
  mensagem += `🎉 Tipo de evento: ${tipoEventoStory.value}%0A`;

  mensagem += `%0A👤 *Informações Pessoais*%0A`;
  mensagem += `Nome: ${nome.value}%0A`;
  mensagem += `📧 E-mail: ${email.value}%0A`;
  mensagem += `📞 Telefone: ${telefone.value}%0A`;
  mensagem += `💬 Observações: ${adicionais.value || "Nenhuma"}%0A`;

  // Preview
  mensagemPreview.textContent = decodeURIComponent(
    mensagem.replace(/%0A/g, "\n")
  );

  modal.style.display = "flex";

  confirmarBtn.onclick = () => {
    modal.style.display = "none";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };
});
