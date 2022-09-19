let currentModal = {}; // register outside to prevent multiple instances
export default function useToggleModal() {
  const closeModal = () => {
    currentModal = {};
  };

  const openModal = (role = "") => {
    currentModal = {
      type: role,
      isOpen: true,
    };
  };

  return {
    closeModal,
    openModal,
    activeModalId: currentModal.type,
  };
}
