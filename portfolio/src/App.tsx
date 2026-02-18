// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Projects } from "./components/Projects";
// import { Skills } from "./components/Skills";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { RouterProvider } from "react-router";
import { router } from "./app/routes";

export default function App() {
  return <RouterProvider router={router} />;
}