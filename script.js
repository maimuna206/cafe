function showMenu(category) {
    // Hide all menus first
    const menus = document.querySelectorAll('.menu-list');
    menus.forEach(menu => menu.classList.add('hidden'));
  
    // Show the selected menu
    const selectedMenu = document.getElementById(category);
    selectedMenu.classList.remove('hidden');
  }
  

    const modal = document.getElementById("customModal");
    const modalTitle = document.getElementById("modalTitle");
    const customOptions = document.getElementById("customOptions");

    function openModal(itemName) {
      modal.style.display = "flex";
      modalTitle.textContent = `Customize your ${itemName}`;
      customOptions.innerHTML = "";

      if (itemName === "Espresso") {
        customOptions.innerHTML += `
          <p><strong>Choose your shot:</strong></p>
          <label><input type="radio" name="espresso_shot" value="single"> Single Shot</label><br>
          <label><input type="radio" name="espresso_shot" value="double"> Double Shot</label><br>
          <p><strong>Add-ons:</strong></p>
          <label><input type="checkbox" value="Vanilla Syrup"> Vanilla Syrup</label><br>
          <label><input type="checkbox" value="Extra Foam"> Extra Foam</label><br>
        `;
      } else if (itemName === "Latte") {
        customOptions.innerHTML += `
          <p><strong>Milk Type:</strong></p>
          <label><input type="radio" name="latte_milk" value="whole"> Whole Milk</label><br>
          <label><input type="radio" name="latte_milk" value="almond"> Almond Milk</label><br>
          <p><strong>Add-ons:</strong></p>
          <label><input type="checkbox" value="Vanilla Syrup"> Vanilla Syrup</label><br>
          <label><input type="checkbox" value="Extra Foam"> Extra Foam</label><br>
          <label><input type="checkbox" value="Caramel Drizzle"> Caramel Drizzle</label><br>
          <label><input type="checkbox" value="Whipped Cream"> Whipped Cream</label><br>
        `;
      } else {
        customOptions.innerHTML += `
          <p><strong>Add-ons:</strong></p>
          <label><input type="checkbox" value="Sugar"> Sugar</label><br>
          <label><input type="checkbox" value="Ice"> Ice</label><br>
        `;
      }
    }

    function closeModal() {
      modal.style.display = "none";
    }

    // Optional: close modal on click outside content
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    }



    //PopUp

  window.onload = function () {
    const popup = document.getElementById("customPopup");
    const usualStyleCheckbox = document.getElementById("usualStyle");
    const customOptions = document.querySelector(".custom-options");

    document.querySelectorAll('.add-btn').forEach(button => {
      button.addEventListener('click', () => {
        popup.classList.remove("hidden");
        popup.style.display = "block";
        usualStyleCheckbox.checked = false;
        customOptions.style.display = "block";
      });
    });

    document.getElementById("customForm").addEventListener("submit", function(e) {
      e.preventDefault();
      popup.style.display = "none";
      alert("Item added to cart with your custom preferences!");
    });

    window.toggleDropdowns = function (checkbox) {
      customOptions.style.display = checkbox.checked ? "none" : "block";
    };

    window.closePopup = function () {
      popup.style.display = "none";
    };
  };
