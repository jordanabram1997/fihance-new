/**
 * Utility function to handle errors and provide a user-friendly error message.
 *
 * This function checks if the error is an instance of `Error` or if the error object contains a specific `error` property.
 * - If the error is an instance of `Error`, it returns the error message if available, or a default message ("Error, please try again.") if the message is empty.
 * - If the error is an object that contains an `error` property, it tries to extract the error message from that property. If it's a non-empty string, it returns that, otherwise, it defaults to the same fallback message.
 * - If the error does not match any of the above conditions, it returns the default error message.
 *
 * This function is typically used for action error handling to display an appropriate message to users when something goes wrong.
 *
 * @param {unknown} e - The error object (can be of any type) to handle.
 * @returns {string} - A user-friendly error message that can be displayed to the user.
 */
export const handleErrors = (e: unknown) => {
    const errMsg = "Error, please try again.";
    if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
    if (e && typeof e === "object" && "error" in e) {
      const errAsStr = e.error as string;
      return errAsStr.length > 0 ? errAsStr : errMsg;
    }
    return errMsg;
  };
  