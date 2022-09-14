import { reactive, readonly } from "vue";

const modal = reactive({
  role: [],
});

export default function useToggleModal() {
  const closeModal = (role = "") => {
    modal.role.pop();
  };

  const openModal = (role = "") => {
    modal.role.push({ type: role, isOpen: true });
  };

  const isModalActive = (role = "") => {
    if (role === "") {
      return false;
    }

    const findRole = modal.role.find((currentRole) =>
      currentRole.type === "" ? null : currentRole.type === role
    );

    return findRole?.type === role && findRole.isOpen;
  };

  return {
    state: readonly(modal),
    closeModal,
    openModal,
    isModalActive,
  };
}
