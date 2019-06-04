import velocity from "velocity-animate";
// import EventEmitter from 'events';

export default class ModalUI {
  constructor() {
    this.$modalWrap = document.querySelector(".js-modal-wrap");
    this.modalItems = Array.from(document.querySelectorAll("[data-modalItem]"));
    this.modalOpenButtons = Array.from(document.querySelectorAll("[data-modalOpenButton]"));
    this.modalCloseButtons = Array.from(document.querySelectorAll(".js-modal-close"));

    this.index = 0;

    this.bind();
  }

  bind() {
    this.modalOpenButtons.forEach(modalOpenButton => {
      modalOpenButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.index = Number(e.currentTarget.dataset.modalopenbutton);
        this.openModal();
      });
    });

    this.modalCloseButtons.forEach(modalCloseButton => {
      modalCloseButton.addEventListener('click', () => {
        this.closeModal();
      });
    });
  }

  openModal() {
    this.$modalWrap.classList.add("is-open");
    this.modalItems[this.index].classList.add("is-open");
    this.scrollpos = window.scrollY;
    document.body.classList.add("no-scroll");
    document.body.style.top = `${-this.scrollpos}px`;

    Velocity(
      this.$modalWrap,
      {
        opacity: 1
      },
      {
        duration: 200,
        mobileHA: false
      }
    );
  }

  closeModal() {
    Velocity(
      this.$modalWrap,
      {
        opacity: 0
      },
      {
        duration: 200,
        mobileHA: false,
        complete: () => {
          this.$modalWrap.classList.remove("is-open");
          this.modalItems[this.index].classList.remove("is-open");
          document.body.classList.remove("no-scroll");
          window.scrollTo(0, this.scrollpos);
          document.body.style.top = 'auto';
        }
      }
    );
  }
}
