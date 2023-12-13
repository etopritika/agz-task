import Title from "../Title/Title";
import GetList from "../Get-List/Get-List";
import MakePost from "../Make-Post/Make-Post";

function Layout() {
  return (
    <main>
      <Title />
      <GetList/>
      <MakePost/>
    </main>
  );
}

export default Layout;
