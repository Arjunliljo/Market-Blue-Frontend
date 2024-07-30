import "./BackBtn.css";

function BackBtn() {
  return (
    <button type="button" class="custom-button">
      <div class="custom-icon">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          ></path>
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          ></path>
        </svg>
      </div>
      <p class="custom-text">Go Back</p>
    </button>
  );
}

export default BackBtn;
