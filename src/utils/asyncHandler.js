const asyncHandler = (fn) => {
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       console.log("Error");
//       res
//         .status(error.code || 500)
//         .json({ success: false, message: error.message });
//     }
//   };
// };
