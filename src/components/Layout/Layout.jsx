import Sidebar from "./Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="bg-[#07070B] min-h-screen text-white">
      <Sidebar />
      <main className="lg:ml-[280px]">{children}</main>
    </div>
  );
}

export default Layout;
