// // routes.js
// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./ErrorPage";
// import TeachLayout from "./pages/teacher/dash/TeachLayout";

// // Define routes with layout wrappers and nested routes
// const router = createBrowserRouter([
 
//   {
//     path: "/teacher",
//     children: [
//       { path: "login", element: <div>djhsjds Settings</div>  },
//       { path: "signup", element: <div>login Settings</div>  },
//       {
//         path: "dashboard",
//         element: <TeachLayout /> ,
//         children: [
//           { path: "/", element: <div>teacher dashboard pagg 1</div>  },
//           { path: "settings", element: <div>Teacher Settings</div> },
//         ],
//       },
//     ],
//   },
 
//   {
//     path: "*",
//     element: <ErrorPage />, // Handle 404 errors
//   },
// ]);

// export default router;
