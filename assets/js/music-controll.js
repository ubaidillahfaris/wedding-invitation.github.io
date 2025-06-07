
  const music = document.getElementById('weddingMusic');
  const toggleBtn = document.getElementById('toggleMusic');
  const icon = document.getElementById('musicIcon');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => updateIcon(true))
          .catch(err => {
            console.log(err)
            console.log("Autoplay gagal, tunggu interaksi user");
          });
      }
    }, 2000); // 2 detik delay
  });

  function updateIcon(isPlaying) {
    icon.src = isPlaying ? 'assets/icons/pause.svg' : 'assets/icons/play.svg';
    icon.alt = isPlaying ? 'Pause' : 'Play';
  }

  window.addEventListener('load', () => {
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => updateIcon(true))
        .catch(() => updateIcon(false)); // Autoplay ditolak
    }
  });

  // Tombol toggle
  toggleBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      updateIcon(true);
    } else {
      music.pause();
      updateIcon(false);
    }
  });
