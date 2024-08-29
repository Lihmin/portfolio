const modal = document.getElementById("modal");
      const closeButton = document.querySelector(".close");

      function openModal() {
        modal.style.display = "flex";
      }

      closeButton.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };