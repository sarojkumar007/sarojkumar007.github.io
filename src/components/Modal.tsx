import React from "react"

import type { FC, MouseEventHandler, ReactNode } from "react"
// import { Info } from 'react-feather';

type ModalProps = {
  children: ReactNode
  isOpen: Boolean
  onClose: MouseEventHandler
  onAction: MouseEventHandler
  actionText?: String
  closeText?: String
  theme?: String
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  onAction,
  actionText = "OK",
  closeText = "Cancel",
  theme = "blue",
}) => {
  return (
    <>
      <div
        className="relative z-30"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
            isOpen
              ? "ease-out duration-300 opacity-100"
              : "invisible ease-in duration-200 opacity-0"
          }`}
        ></div>

        <div
          className={`fixed z-10 inset-0 overflow-y-auto ${
            !isOpen && "invisible"
          }`}
        >
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div
              className={`relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:m-8 sm:max-w-3xl max-w-md w-full ${
                isOpen
                  ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
                  : "invisible ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${
                    theme === "red" ? "bg-red-500" : "bg-orange-600"
                  } text-base font-medium text-white ${
                    theme === "red" ? "hover:bg-red-600" : "hover:bg-orange-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 sm:ml-3 sm:w-auto sm:text-sm ${
                    theme === "red"
                      ? `focus:ring-red-600`
                      : "focus:ring-orange-700"
                  }`}
                  onClick={onAction}
                >
                  {actionText}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border dark:border-2 border-gray-300 dark:border-gray-400 shadow-sm px-4 py-2 text-base font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 focus:ring-gray-400 dark:focus:ring-gray-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  {closeText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
