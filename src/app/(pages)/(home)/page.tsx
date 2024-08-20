"use client";
import styles from "./page.module.scss";
import ProgressBar from "@/components/Progress/progress";
import BaseCard from "@/components/ui/BaseCard/baseCard";
import BaseForm from "@/components/ui/BaseForm/baseForm";

const Home = () => {
  return (
    <main className={styles.main}>
      <ProgressBar/>
        <BaseCard>
          <BaseForm/>
        </BaseCard>
    </main>
  );
};

export default Home;
