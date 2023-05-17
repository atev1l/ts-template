export const isUrlExists = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'no-cache',
    });

    return response.status === 200;
  } catch (error) {
    // console.log(error);
    return false;
  }
};
// export const isUrlExists = async (url: string) => (await fetch(url)).ok;

export const openURL = (URL: string) => {
  const win = window.open(URL, '_blank');
  if (win != null) {
    win.focus && win.focus();
  }
};
