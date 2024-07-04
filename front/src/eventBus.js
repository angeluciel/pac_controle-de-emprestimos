import { reactive } from "vue";

export const auth = reactive({
  autenticado: false,
});

export const useAuth = () => {
  const autenticarUsuario = (autenticado) => {
    auth.autenticado = autenticado;
  };

  window.addEventListener("autenticar", (event) => {
    autenticarUsuario(event.detail);
  });

  return auth;
};
