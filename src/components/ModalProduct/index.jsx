import React from "react";

export default function ModalProduct({
  isOpenModal,
  title,
  children,
  closeModal,
}) {
  if (!isOpenModal) {
    return null;
  }
  const hideModal = () => {
    closeModal(false);
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center p-4 overflow-y-auto"
      style={{ zIndex: 100 }}
    >
      <div className={`relative w-full max-w-3xl max-h-full overflow-y-auto`}>
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              onClick={hideModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
