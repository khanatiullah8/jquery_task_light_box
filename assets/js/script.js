$(document).ready(function () {
  $(".card").click(function () {
    var cardText = $(this).children("h3").html();
    var cardImage = $(this).children("figure").html();
    var closeButton = $(".close-button");
    var modalBox = $(".modal");
    var modalContent = $(".modal-content");

    closeButton.show();
    modalBox.show();

    modalContent.children("figure").html(cardImage);
    modalContent.children("h3").html(cardText);

    function elementHide(element1, element2) {
      element1.hide();
      element2.hide();
    }

    closeButton.click(function () {
      elementHide(closeButton, modalBox);
    });

    modalBox.click(function () {
      elementHide(modalBox, closeButton);
    });

    modalContent.click(function (e) {
      e.stopPropagation();
    });
  });
});