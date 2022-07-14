import { Header } from "./components/Header"
import {Post} from "./Post"

export function App() {
 return (
  <div>
    <Header />
    <Post
      author='Antonio Carlos'
      content='josejosejosejosejose'
    /> 
    <Post
      author=' Carlos'
      content='peido peido peido'
    />  
  </div>
  
 )
}
