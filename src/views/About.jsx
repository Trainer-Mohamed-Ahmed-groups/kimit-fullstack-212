import { useTranslation } from "react-i18next";
import ShowCourse from "../components/ShowCourse";

export default function About() {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('aboutTitle')}</h2>
            <ShowCourse />

        </div>
    )
}
