export default function TripDescriptionModal(props) {
  const onClose = () => {
    props.setIsOpen(false);
  }

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__head">
          <h3 className="modal__heading">Description</h3>

          <button onClick={() => onClose()} type="button" className="modal__close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7L17 17M7 17L17 7" stroke="#2D2C2B" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="modal__content">
          {props.description}
        </div>
      </div>
    </div>
  )
}
