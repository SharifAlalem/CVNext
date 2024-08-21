"use client";
import styles from "./page.module.scss";
import ProgressBar from "@/components/Progress/progress";
import BaseCard from "@/components/ui/BaseCard/baseCard";
import BaseForm from "@/components/ui/BaseForm/baseForm";
import { FormBuildDataWrapper } from "@/context/formBuildData";
import { ComponentsWrapper } from "@/context/stepsComponents";

const Home = () => {
  return (
    <ComponentsWrapper>
      <FormBuildDataWrapper>
        <main className={styles.main}>
          <ProgressBar/>
            <BaseCard>
              <BaseForm/>
            </BaseCard>
        </main>
      </FormBuildDataWrapper>
    </ComponentsWrapper>
  );
};

export default Home;
