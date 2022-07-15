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
        text: "Yey you want to share me thanks",
        style: {
          background: "#00b09b",
        }
      }).showToast()
    } catch(err) {
        Toastify({
            text: "failed to share",
            style: {
              background: "#00b09b",
            }
          }).showToast();
    }
  });