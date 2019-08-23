import Swal from 'sweetalert2';

export const showToast = (type, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type,
    title
  });
};
