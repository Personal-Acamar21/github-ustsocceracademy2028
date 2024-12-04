import toast from 'react-hot-toast';

export const showSuccess = (message: string) => {
  toast.success(message, {
    style: {
      background: '#333',
      color: '#fff',
    },
    iconTheme: {
      primary: '#00FF00',
      secondary: '#000',
    },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    style: {
      background: '#333',
      color: '#fff',
    },
  });
};

export const showLoading = (message: string) => {
  return toast.loading(message, {
    style: {
      background: '#333',
      color: '#fff',
    },
  });
};