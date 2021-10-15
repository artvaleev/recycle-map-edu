const dataSourceUrl = `${process.env.VUE_APP_BACKEND_HOST}/points`;

export const loadItems = (instance) => {
  return fetch(dataSourceUrl).then((response) => response.json()).catch((e) => {
    console.error(e);

    instance.$toast.error("Data loading error", {
      position: "bottom-right",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false
    });
  });
};
