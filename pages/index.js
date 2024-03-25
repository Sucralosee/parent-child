import ChildTwo from "./ChildTwo";
import ParentOne from "./ParentOne";
import parentToChild from "./ParentOne";
import ChildToParent from "./ParentTwo"
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>

      <main className={`${styles.main}`}>
        <ParentOne/>
        <ChildToParent/>
      </main>
    </>
  );
}
