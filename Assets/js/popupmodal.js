const popUpModal = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const okbtn = document.getElementById("cancelBtn");
    okbtn.addEventListener("click", () => {
      document.getElementById("myModal").classList.remove("show");
    })

    // buttons to load the pop up modal
    document.getElementById("successPopUp").addEventListener("click", () => {
        document.getElementById("myModal").classList.add("show")
        document.querySelector(".cmp-custom-modal__content-icon").setAttribute("src", "../../images/success_icon.png");
        document.querySelector(".cmp-custom-modal__content-title").innerHTML = "Hurrah! Your message sent";
        document.querySelector(".cmp-custom-modal__content-desc").innerHTML = "You query sent to our admin pannel, they will reach out to you as soon as possible. Thankyou for writing you concern.";
    })
    document.getElementById("errorPopUp").addEventListener("click", () => {
        document.getElementById("myModal").classList.add("show")
        document.querySelector(".cmp-custom-modal__content-icon").setAttribute("src", "../../images/error_icon.png");
        document.querySelector(".cmp-custom-modal__content-title").innerHTML = "Sorry! Unable to send";
        document.querySelector(".cmp-custom-modal__content-desc").innerHTML = "We are not able to send your query at this moment. Please try again after sometime";
    })
  });
}

export default popUpModal;