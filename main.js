const shareData = {
    title: 'Test Assignment',
    text: 'just a test',
    url: window.location.href
  }
  
  const btn = document.getElementById('share');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      Toastify({
        text: "Yey share me!",
        style: {
          background: "linear-gradient(to right, #00b09b, #00b09b)",
        }
      }).showToast()
    } catch(err) {
        Toastify({
            text: "failed to share",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }
  });